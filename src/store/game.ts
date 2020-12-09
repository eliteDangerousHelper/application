import { EventED } from '@/interfaces/events/base';
import parse from '@/utils/eventParser';
import {
  checkJournal,
  searchJournal,
  watchNewJournal
} from "@/utils/gameWatch";
import { FSWatcher } from "chokidar";
import { reactive } from "vue";
import Obserser from "@/utils/observer";

const obs = new Obserser();
obs.on('file-updated', (log: { message: string }) => {
  const events: EventED[] = [];
  const lines = log.message.split(/\r?\n/);

  for (const line of lines) {
    if (line !== "") {
      events.push(JSON.parse(line))
    }
  }

  events.forEach(event => {
    parse(event);
  })
});
const electron = window.require("electron");

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
    (electron.app || electron.remote.app).getPath("home") +
    "\\Saved Games\\Frontier Developments\\Elite Dangerous\\",
  lastLine: 0,
  horizons: true,
  mode: "Solo"
});

searchJournal(state.gameDir).then((filename: string | undefined) => {
  state.journal = filename;
  if (!state.journal) {
    watchNewJournal(state.gameDir).on("add", path => {
      const valid = checkJournal(path);
      state.journal = valid ? path.replace(state.gameDir, "") : undefined;
      obs.watchFile(state.gameDir + state.journal);
    });
  } else {
    obs.watchFile(state.gameDir + state.journal);
  }
});

export default { state };
