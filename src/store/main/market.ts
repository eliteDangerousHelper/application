import { reactive } from "vue";

interface Commoditie {
  "id": number,
  "Name": string,
  "Name_Localised": string,
  "Category": string,
  "Category_Localised": string,
  "BuyPrice": number,
  "SellPrice": number,
  "MeanPrice": number,
  "StockBracket": number,
  "DemandBracket": number,
  "Stock": number,
  "Demand": number,
  "Consumer": boolean,
  "Producer": boolean,
  "Rare": boolean
}

export interface MarketState {
  id: number;
  commodities: Commoditie[]

}

const state: MarketState = reactive({
  id: 287467,
  commodities: []
});

export default { state };
