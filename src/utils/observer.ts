import { watch } from "chokidar";
import { EventEmitter } from "events";
import { createReadStream } from "fs";
import { readLastLines } from "read-last-lines-ts";
import store from "../store/background/game";

class Observer extends EventEmitter {
  constructor() {
    super();
  }

  async watchFile(targetFile: string) {
    try {
      console.log(
        `[${new Date().toLocaleString()}] Watching for file changes on: ${targetFile}`
      );

      // Get update content of file, in this case is one line
      const buffer = await readLastLines(targetFile, 0);
      const updateContent = buffer.toString("utf8");

      // emit an event when the file has been updated
      this.emit("file-updated", { message: updateContent });

      const watcher = watch(targetFile, { persistent: true });

      watcher.on("change", async (filePath: string) => {
        console.log(
          `[${new Date().toLocaleString()}] ${filePath} has been updated.`
        );

        const nbLines = await this.countLines(targetFile);
        const lineToRead = nbLines - store.state.lastLine;

        store.state.lastLine = nbLines;

        // Get update content of file, in this case is one line
        const buffer = await readLastLines(filePath, lineToRead);
        const updateContent = buffer.toString("utf8");

        // emit an event when the file has been updated
        this.emit("file-updated", { message: updateContent });
      });
    } catch (error) {
      console.log(error);
    }
  }

  countLines(filePath: string): Promise<number> {
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
}

export default Observer;
