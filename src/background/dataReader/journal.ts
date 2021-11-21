import { lstatSync, readdir, readFile, Stats } from "fs";
import { getLastLine } from '@/background/utils/fileUtils';
import configStore from "@/background/store/config";
import { watchFile } from "@/background/utils/fileUtils";

const regexJournal = /Journal.*\.log/;

type FileInfo = {
  name: string;
  stat: Stats;
}

const checkJournal = async (path: string) => {
  const lastLine = await getLastLine(path);

  return !(lastLine === undefined || JSON.parse(lastLine).event === "Shutdown");
};

const getJournal = (folder: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    readdir(folder, async (err, files) => {
      if (err) {
        reject(err);
      }

      const filesInfo: FileInfo[] = files.filter((f: string) => lstatSync(folder + f).isFile())
        .filter((f: string) => f.match(regexJournal))
        .map((f: string) => ({ name: f, stat: lstatSync(folder + f) }))
        .sort(
          (a: FileInfo, b: FileInfo) =>
            b.stat.mtime.getTime() - a.stat.mtime.getTime()
        );

        if (filesInfo.length) {
          const journal = filesInfo[0].name;
          if (!await checkJournal(folder + journal)) {
            reject();
          }
          resolve(journal);
        }
        reject();
    })
  });
}

export const initializeJournal = async () => {
  setInterval(() => {
    getJournal(configStore.state.gameDir)
    .then((filename) => {
      if (filename !== configStore.state.journal) {
        configStore.state.journal = filename;
        watchFile(configStore.state.gameDir + configStore.state.journal);
        console.log(`Watch journal : ${filename}`);
      }
    })
    .catch(() => {
      configStore.state.journal = undefined;
    })
  }, 100);
}
