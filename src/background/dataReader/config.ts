import { join } from "path";
import { app, remote } from "electron";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import configStore from "@/background/store/config";

const configPath = join((app || remote.app).getPath("userData"), "config");
const confBasePath = join(configPath, "options.json");

export const writeConfig = async (data: object) => {
  writeFileSync(confBasePath, JSON.stringify(data));
};

export const fetchOptions = async (): Promise<string> => {
  let defaultOptionsStore = {
    lang: "en",
    gameDir: configStore.state.gameDir
  };

  try {
    const data = readFileSync(confBasePath, { flag: "r", encoding: "utf8" });
    const options = JSON.parse(data);
    
    if (options.lang) {
      defaultOptionsStore.lang = options.lang;
    }
    if (options.gameDir) {
      defaultOptionsStore.gameDir = options.gameDir;
      configStore.state.gameDir = options.gameDir;
    }
  } catch (error) {
    mkdirSync(configPath);
  }
  writeConfig(defaultOptionsStore);

  return JSON.stringify(defaultOptionsStore);
};
