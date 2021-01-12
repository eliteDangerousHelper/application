import { Locales } from "@/i18n/locales";
import { IpcMainEvent } from "electron";
import { reactive } from "vue";

const { ipcRenderer } = window.require("electron");

ipcRenderer.send('fetch-options');


export interface OptionsState {
  lang: Locales;
}

const state: OptionsState = reactive({
  lang: Locales.EN,
});

ipcRenderer.on('fetch-options-end', (event: IpcMainEvent, arg: string) => {
  const options = JSON.parse(arg) as OptionsState;
  state.lang = options.lang
})

export default { state };
