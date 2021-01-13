import { FSWatcher } from "chokidar";
import { app, remote } from "electron";
import { reactive } from "vue";

export interface GameState {
  gameDir: string;
  journal?: string;
  watcher?: FSWatcher;
  lastLine: number;
  horizons: boolean;
  mode: string;
  group?: string;
}

const state: GameState = reactive({
  gameDir:
    (app || remote.app).getPath("home") +
    "\\Saved Games\\Frontier Developments\\Elite Dangerous\\",
  lastLine: 0,
  horizons: true,
  mode: "Solo"
});

export default { state };
