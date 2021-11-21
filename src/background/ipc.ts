import { BrowserWindow, dialog, ipcMain } from "electron";
import { fetchOptions, writeConfig } from "@/background/dataReader/config";
import { getCommodities } from "@/background/dataReader/market";
import configStore from "@/background/store/config";
import { initializeJournal } from "./dataReader/journal";
import { EventED } from "@/types/events/base";
import { writeFile } from "fs";

const isDevelopment = process.env.NODE_ENV !== "production";
const unparsedEventLogFile = __dirname + "../../unparsed-event.jsonl";

ipcMain.on("write-config", (event, arg: string) => {
  writeConfig(JSON.parse(arg));
});

ipcMain.on("get-commodities", event => {
  getCommodities().then(commodities => {
    event.reply("get-commodities-end", commodities);
  });
});

ipcMain.on("fetch-options", event => {
  fetchOptions().then(options => {
    event.reply("fetch-options-end", options);
  });
});

ipcMain.on("unparse-event", (event, e: EventED) => {
  if (isDevelopment) {
    console.error(`[${new Date().toLocaleString()}] Unparsed Event: ${e.event}`)
    writeFile(unparsedEventLogFile, JSON.stringify(e), { flag: "a" }, err => {
      if (err) {
        console.error(err);
      }
    });
  }
});

export const ipcMainWithWin = (win: BrowserWindow) => {
  ipcMain.on('select-gamedir', async (event) => {
    const result = await dialog.showOpenDialog(win, {
      properties: ['openDirectory']
    })
    if (result.filePaths.length > 0) {
      configStore.state.gameDir = result.filePaths[0];
      initializeJournal();

      fetchOptions().then(options => {
        event.reply("fetch-options-end", options);
      });
    }
  })
}