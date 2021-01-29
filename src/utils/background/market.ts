import gameStore from "@/store/background/game";
import { readFile } from "fs";

export const getCommodities = () => {
  return new Promise((resolve, reject) => {
    const gamePath = gameStore.state.gameDir;

    readFile(gamePath + "Market.json", (err, commodities) => {
      if (err) {
        reject(err);
      }
      resolve(commodities.toString());
    });
  });
};
