import { FSWatcher } from "chokidar";
import { app, remote } from "electron";
import { reactive } from "vue";

export interface GameState {
  gameDir: string;
  journal?: string;
  watcher?: FSWatcher;
  lastLine: number;
}

const state: GameState = reactive({
  gameDir:
    (app || remote.app).getPath("home") +
    "\\Saved Games\\Frontier Developments\\Elite Dangerous\\",
  lastLine: 0,
});

export default { state };
