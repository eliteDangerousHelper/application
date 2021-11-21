import { EventED } from "./base";

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

export interface MissionAbandoned extends EventED {
  Name: string;
  MissionID: number;
}

export interface MissionAccepted extends EventED {
  Name: string;
  LocalisedName: string;
  Faction: string;
  MissionID: number;
  TargetFaction: string;
  KillCount: number;
  DestinationSystem: string;
  DestinationStation: string;
  Expiry: string;
  Wing: boolean;
  Influence: string;
  Reputation: string;
  Reward: number;
}

export interface MissionCompleted extends EventED {
  Name: string;
  MissionID: number;
  Faction: string;
  Reward: number;
}

export interface MissionFailed extends EventED {
  Name: string;
  MissionID: number;
}
