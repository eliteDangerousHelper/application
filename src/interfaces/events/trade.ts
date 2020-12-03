import { EventED } from './base';

export interface BuyTradeData extends EventED {
  System: string;
  Cost: number;
}

export interface CollectCargo extends EventED {
  Type: string;
  Stolen: boolean;
}

export interface EjectCargo extends EventED {
  Type: string;
  Count: number;
  Abandoned: boolean;
}

export interface MarketBuy extends EventED {
  Type: string;
  Count: number;
  BuyPrice: number;
  TotalCost: number;
}

export interface MarketSell extends EventED {
  Type: string;
  Count: number;
  SellPrice: number;
  TotalSale: number;
  AvgPricePaid: number;
  IllegalGoods?: boolean;
  StolenGoods?: boolean;
  BlackMarket?: boolean;
}

export interface MiningRefined extends EventED {
  Type: string;
}
