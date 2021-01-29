import { lstatSync, readdirSync, readFileSync, Stats } from "fs";
import { FSWatcher, watch } from "chokidar";

const regexJournal = /Journal.*\.log/;

interface FileInfo {
  name: string;
  stat: Stats;
}

const getLines = (path: string): string[] => {
  const data: string = readFileSync(path, "utf8");

  return data.split(/\r?\n/);
};

const getLastLine = (path: string): string | undefined => {
  const lines = getLines(path);
  let lastLine = undefined;

  if (lines.length) {
    do {
      lastLine = lines.pop();
    } while (lastLine === "");
  }

  console.log(lastLine);

  return lastLine;
};

export const checkJournal = (path: string) => {
  console.log("checkJournal", path);

  const lastLine = getLastLine(path);

  return !(lastLine === undefined || JSON.parse(lastLine).event === "Shutdown");
};

export const watchNewJournal = (folder: string): FSWatcher => {
  const watcher = watch(folder, {
    ignoreInitial: true,
    persistent: true
  });

  return watcher
    .on("add", (path: string) => {
      console.log(`File ${path} has been added`);

      if (!path.match(regexJournal)) {
        watcher.unwatch(path);
        console.log(`File ${path} has been unwatch`);
      }
    })
    .on("delete", (path: string) => watcher.unwatch(path));
};

export const searchJournal = async (
  folder: string
): Promise<string | undefined> => {
  let journal = undefined;

  const files: FileInfo[] = readdirSync(folder)
    .filter((f: string) => lstatSync(folder + f).isFile())
    .filter((f: string) => f.match(regexJournal))
    .map((f: string) => ({ name: f, stat: lstatSync(folder + f) }))
    .sort(
      (a: FileInfo, b: FileInfo) =>
        b.stat.mtime.getTime() - a.stat.mtime.getTime()
    );

  if (files.length) {
    journal = files[0].name;
    if (!checkJournal(folder + journal)) {
      journal = undefined;
    }
  }

  return journal;
};
