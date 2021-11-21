import { watch } from "chokidar";
import { readLastLines } from "read-last-lines-ts";
import { createReadStream, readFile } from "fs";
import emitter from '@/background/utils/eventUtils';

const countLines = (filePath: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    let i;
    let count = 0;
    createReadStream(filePath)
      .on("error", (e: Error) => reject(e))
      .on("data", (chunk: any) => {
        for (i = 0; i < chunk.length; ++i) if (chunk[i] == 10) count++;
      })
      .on("end", () => resolve(count));
  });
}

export const watchFile = async (path: string) => {
  let lastLine = 0
  try {
    console.log(
      `[${new Date().toLocaleString()}] Watching for file changes on: ${path}`
    );

    // Get update content of file, in this case is one line
    const buffer = await readLastLines(path, 0);
    const updateContent = buffer.toString("utf8");

    // emit an event when the file has been updated
    emitter.emit("file-updated", { message: updateContent });

    const watcher = watch(path, { persistent: true });

    watcher.on("change", async (filePath: string) => {
      console.log(
        `[${new Date().toLocaleString()}] ${filePath} has been updated.`
      );

      const nbLines = await countLines(path);
      const lineToRead = nbLines - lastLine;

      lastLine = nbLines;

      // Get update content of file
      const buffer = await readLastLines(filePath, lineToRead);
      const updateContent = buffer.toString("utf8");

      // emit an event when the file has been updated
      emitter.emit("file-updated", { file: filePath, message: updateContent });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getLines = (path: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data.split(/\r?\n/));
    });
  });
};

export const getLastLine = async (path: string): Promise<string | undefined> => {
  const lines = await getLines(path);
  let lastLine = undefined;

  if (lines.length) {
    do {
      lastLine = lines.pop();
    } while (lastLine === "");
  }

  return lastLine;
};
