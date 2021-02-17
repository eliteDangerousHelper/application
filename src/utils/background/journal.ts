import { lstatSync, readdir, readFile, Stats } from "fs";
import gameStore from "@/store/background/game";
import Obserser from "@/utils/observer";
import { FSWatcher, watch } from "chokidar";

const regexJournal = /Journal.*\.log/;
export const journalObserver = new Obserser();

interface FileInfo {
  name: string;
  stat: Stats;
}

const getLines = (path: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data.split(/\r?\n/));
    });
  });
};

const getLastLine = async (path: string): Promise<string | undefined> => {
  const lines = await getLines(path);
  let lastLine = undefined;

  if (lines.length) {
    do {
      lastLine = lines.pop();
    } while (lastLine === "");
  }

  console.log(lastLine);

  return lastLine;
};

const checkJournal = async (path: string) => {
  console.log("checkJournal", path);

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

const watchNewJournal = (folder: string): FSWatcher => {
  const watcher = watch(folder, {
    ignoreInitial: true,
    persistent: true
  });

  return watcher
    .on("add", async (path: string) => {
      console.log(`File ${path} has been added`);

      if (!path.match(regexJournal)) {
        watcher.unwatch(path);
        console.log(`File ${path} has been unwatch`);
        return;
      }

      if (await checkJournal(path)) {
        gameStore.state.journal = path.replace(gameStore.state.gameDir, "");
        journalObserver.watchFile(gameStore.state.gameDir + gameStore.state.journal);
      } else {
        console.error("unvalid file", path);
      }
    })
    .on("delete", (path: string) => watcher.unwatch(path));
};

export const initializeJournal = async () => {
  getJournal(gameStore.state.gameDir)
    .then((filename) => {
      gameStore.state.journal = filename;
      journalObserver.watchFile(gameStore.state.gameDir + gameStore.state.journal)
    })
    .catch(() => {
      gameStore.state.journal = undefined;
      watchNewJournal(gameStore.state.gameDir)
    })
  ;
}
