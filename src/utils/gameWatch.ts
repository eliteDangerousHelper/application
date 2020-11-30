import { Stats } from "fs";
import { FSWatcher } from "chokidar";

const remote = window.require("electron").remote;
const fs = remote.require("fs");
const readline = remote.require("readline");
const Stream = remote.require("stream");
const regexJournal = /Journal.*\.log/;

interface FileInfo {
  name: string;
  stat: Stats;
}

const getLastLine = (path: string): Promise<string | undefined> => {
  const inStream = fs.createReadStream(path);
  const outStream = new Stream();
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface(inStream, outStream);

    let lastLine: string | undefined = undefined;
    rl.on("line", function(line: string) {
      if (line.length >= 1) {
        lastLine = line;
      }
    });

    rl.on("error", () => {
      console.log("Erreur");
      reject();
    });

    rl.on("close", function() {
      resolve(lastLine);
    });
  });
};

export const checkJournal = async (path: string) => {
  const lastLine = await getLastLine(path);

  return !(lastLine === undefined || JSON.parse(lastLine).event === "Shutdown");
};

export const watchNewJournal = (folder: string): FSWatcher => {
  const chokidar = remote.require("chokidar");
  const watcher = chokidar.watch(folder, {
    ignoreInitial: true,
    persistent: true
  });

  return watcher
    .on("add", (path: string) => {
      if (!path.match(regexJournal)) {
        watcher.unwatch(path);
      }
    })
    .on("delete", (path: string) => watcher.unwatch(path));
};

export const searchJournal = async (
  folder: string
): Promise<string | undefined> => {
  let journal = undefined;

  const files: FileInfo[] = fs
    .readdirSync(folder)
    .filter((f: string) => fs.lstatSync(folder + f).isFile())
    .filter((f: string) => f.match(regexJournal))
    .map((f: string) => ({ name: f, stat: fs.lstatSync(folder + f) }))
    .sort(
      (a: FileInfo, b: FileInfo) =>
        b.stat.mtime.getTime() - a.stat.mtime.getTime()
    );

  if (files.length) {
    journal = files[0].name;
    if (!(await checkJournal(folder + journal))) {
      journal = undefined;
    }
  }

  return journal;
};
