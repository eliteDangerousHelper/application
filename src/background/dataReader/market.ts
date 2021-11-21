import configStore from "@/background/store/config";
import { readFile } from "fs";

export const getCommodities = () => {
  return new Promise((resolve, reject) => {
    const gamePath = configStore.state.gameDir;

    readFile(gamePath + "Market.json", (err, commodities) => {
      if (err) {
        reject(err);
      }
      resolve(commodities.toString());
    });
  });
};
