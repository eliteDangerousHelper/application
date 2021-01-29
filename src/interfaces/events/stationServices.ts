import { EventED } from './base';

export interface BuyAmmo extends EventED {
  Cost: number;
}

export interface BuyDrones extends EventED {
  Type: string;
  Count: number;
  BuyPrice: number;
  TotalCost: number;
}

export interface CommunityGoalDiscard extends EventED {
  Name: string;
  System: string;
}

export interface CommunityGoalJoin extends EventED {
  Name: string;
  System: string;
}

export interface CommunityGoalReward extends EventED {
  Name: string;
  System: string;
  Reward: number;
}

export interface Market extends EventED {
  MarketID: number;
  StationName: string;
  StarSystem: number;
}
