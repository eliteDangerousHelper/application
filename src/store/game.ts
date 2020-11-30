import {
  checkJournal,
  searchJournal,
  watchNewJournal
} from "@/utils/gameWatch";
import { FSWatcher } from "chokidar";
import { reactive } from "vue";

const electron = window.require("electron");

export interface GameState {
  gameDir: string;
  journal?: string;
  watcher?: FSWatcher;
}

const state: GameState = reactive({
  gameDir:
    (electron.app || electron.remote.app).getPath("home") +
    "\\Saved Games\\Frontier Developments\\Elite Dangerous\\"
});

searchJournal(state.gameDir).then((filename: string | undefined) => {
  state.journal = filename;
  if (!state.journal) {
    watchNewJournal(state.gameDir).on("add", path => {
      checkJournal(path).then(valid => {
        state.journal = valid ? path.replace(state.gameDir, "") : undefined;
      });
    });
  }
});

export default { state };
