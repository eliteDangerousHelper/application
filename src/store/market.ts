import { IpcRendererEvent } from "electron";
import { reactive } from "vue";

const { ipcRenderer } = window.require("electron");

interface CommoditieInFile {
  id: number;
  Name: string;
  Name_Localised: string;
  Category: string;
  Category_Localised: string;
  BuyPrice: number;
  SellPrice: number;
  MeanPrice: number;
  StockBracket: number;
  DemandBracket: number;
  Stock: number;
  Demand: number;
  Consumer: boolean;
  Producer: boolean;
  Rare: boolean;
}

interface MarketFile {
  timestamp: string;
  event: "Market";
  MarketID: number;
  StationName: string;
  StationType: string;
  StarSystem: string;
  Items: CommoditieInFile[];
}

interface Commoditie {
  id: number;
  name: string;
  nameLocalised: string;
  category: string;
  categoryLocalised: string;
  buyPrice: number;
  sellPrice: number;
  meanPrice: number;
  stockBracket: number;
  demandBracket: number;
  stock: number;
  demand: number;
  consumer: boolean;
  producer: boolean;
  rare: boolean;
}

export interface MarketState {
  id: number;
  commodities: Commoditie[];
}

const state: MarketState = reactive({
  id: 0,
  commodities: []
});

ipcRenderer.on(
  "get-commodities-end",
  (event: IpcRendererEvent, arg: string) => {
    const file = JSON.parse(arg) as MarketFile;
    file.Items.forEach(el => {
      state.commodities.push({
        id: el.id,
        name: el.Name,
        nameLocalised: el.Name_Localised,
        category: el.Category,
        categoryLocalised: el.Category_Localised,
        buyPrice: el.BuyPrice,
        sellPrice: el.SellPrice,
        meanPrice: el.MeanPrice,
        stockBracket: el.StockBracket,
        demandBracket: el.DemandBracket,
        stock: el.Stock,
        demand: el.Demand,
        consumer: el.Consumer,
        producer: el.Producer,
        rare: el.Rare
      });
    });
    state.id = file.MarketID;
    console.log("get-commodities-end", file.Items.length);
  }
);

export default { state };
