import { IpcRendererEvent } from "electron";
import { reactive } from "vue";

const { ipcRenderer } = window.require("electron");

ipcRenderer.send("fetch-options");

export interface OptionsState {
  gameDir: string;
}

const state: OptionsState = reactive({
  gameDir: 'test de fichier'
});

ipcRenderer.on("fetch-options-end", (event: IpcRendererEvent, arg: string) => {
  const options = JSON.parse(arg) as OptionsState;
  state.gameDir  = options.gameDir;
});

export default { state };
