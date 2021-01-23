import { createApp, watch } from "vue";
import App from "./App.vue";
import { messages, defaultLocale } from "@/i18n";
import optionsStore from "./store/main/options";
import { EventED } from '@/interfaces/events/base';
import parse from "./utils/eventParser";
import parseCommodities from "./utils/commoditiesParser";
import { createI18n } from "vue-i18n";

import "normalize.css";
import { IpcRendererEvent } from "electron";

const { ipcRenderer } = window.require("electron");

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
});

watch(optionsStore.state, () => {
  i18n.global.locale.value = optionsStore.state.lang;
})

ipcRenderer.on("new-event", (e: IpcRendererEvent, ev: EventED) => {
  parse(ev);
});

ipcRenderer.on("add-commodities", (e: IpcRendererEvent, ev: any) => {
  parseCommodities(ev);
});

createApp(App)
.use(i18n)
.mount("#app");
