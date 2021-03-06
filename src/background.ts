"use strict";

import { app, protocol, BrowserWindow, ipcMain, dialog } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";
import { fetchOptions, writeConfig } from "@/utils/background/options";
import gameStore from "@/store/background/game";
import { getCommodities } from "@/utils/background/market";
import { initializeJournal, journalObserver } from "@/utils/background/journal";
import { EventED } from "./interfaces/events/base";
import { writeFile } from "original-fs";

const isDevelopment = process.env.NODE_ENV !== "production";
const logFile = "./log.log";
const unparsedEventLogFile = "./unparsed-event.jsonl";
const NEW_LINE = "\r\n";

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

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
    writeFile(unparsedEventLogFile, JSON.stringify(e), { flag: "a" }, err => {
      if (err) {
        console.error(err);
      }
    });
  }
});

initializeJournal();

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: true
    }
  });

  win.setMenu(null);
  win.maximize();

  ipcMain.on('select-gamedir', async (event) => {
    const result = await dialog.showOpenDialog(win, {
      properties: ['openDirectory']
    })
    if (result.filePaths.length > 0) {
      gameStore.state.gameDir = result.filePaths[0];
      initializeJournal();

      fetchOptions().then(options => {
        event.reply("fetch-options-end", options);
      });
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
    if (!process.env.IS_TEST) win.webContents.openDevTools({ mode: "detach" });
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  journalObserver.on("file-updated", (log: { message: string }) => {
    const lines = log.message.split(/\r?\n/);

    for (const line of lines) {
      if (line !== "") {
        const event = JSON.parse(line) as EventED;
        if (isDevelopment) {
          const toWrite = `event : ${event.event} parsed ${NEW_LINE}`;
          writeFile(logFile, toWrite, { flag: "a" }, err => {
            if (err) {
              console.error(err);
            }
          })
        }
        win.webContents.send("new-event", event);
      }
    }
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
