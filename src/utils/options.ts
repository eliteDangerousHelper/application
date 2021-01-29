import { join } from "path";
import { app, remote } from "electron";
import { mkdirSync, readFileSync, writeFileSync } from "fs";

const configPath = join((app || remote.app).getPath("userData"), "config");
const confBasePath = join(configPath, "options.json");

export const writeConfig = async (data: string) => {
  writeFileSync(confBasePath, JSON.stringify(data));
};

export const fetchOptions = async (): Promise<string> => {
  let defaultOptionsStore = {
    lang: "en"
  };

  try {
    const data = readFileSync(confBasePath, { flag: "r", encoding: "utf8" });
    defaultOptionsStore = JSON.parse(data);
  } catch (error) {
    mkdirSync(configPath);
    writeConfig(JSON.stringify(defaultOptionsStore));
  }

  return JSON.stringify(defaultOptionsStore);
};
