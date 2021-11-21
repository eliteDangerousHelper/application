import { createApp } from "vue";
import App from "./App.vue";
import parse from "./utils/eventParser";
import { EventED } from "@/types/events/base";
import { IpcRendererEvent } from "electron";
import "normalize.css";

const { ipcRenderer } = window.require("electron");

ipcRenderer.on("new-event", (e: IpcRendererEvent, ev: EventED) => {
  parse(ev);
});

createApp(App).mount("#app");
