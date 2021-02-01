import { join } from "path";
import { app, remote } from "electron";
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import optionsStore from "@/store/background/game";

const configPath = join((app || remote.app).getPath("userData"), "config");
const confBasePath = join(configPath, "options.json");

export const writeConfig = async (data: string) => {
  writeFileSync(confBasePath, JSON.stringify(data));
};

export const fetchOptions = async (): Promise<string> => {
  let defaultOptionsStore = {
    lang: "en",
    gameDir: optionsStore.state.gameDir
  };

  try {
    const data = readFileSync(confBasePath, { flag: "r", encoding: "utf8" });
    const options = JSON.parse(data);
    if (options.lang) {
      defaultOptionsStore.lang = options.lang;
    }
    if (options.gameDir) {
      defaultOptionsStore.gameDir = options.gameDir;
      optionsStore.state.gameDir = options.gameDir;
    }
  } catch (error) {
    mkdirSync(configPath);
  }
  writeConfig(JSON.stringify(defaultOptionsStore));

  return JSON.stringify(defaultOptionsStore);
};