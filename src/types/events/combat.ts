import { EventED } from "./base";

interface Reward {
  Faction: string;
  Reward: string;
}

interface Killer {
  Name: string;
  Ship: string;
}

export interface Bounty extends EventED {
  Rewards: Reward[];
  VictimFaction: string;
  TotalReward: number;
  SharedWithOthers: number;
}

export interface CapShipBond extends EventED {
  Reward: number;
  AwardingFaction: string;
  VictimFaction: string;
}

export interface Died extends EventED {
  KillerName?: string;
  KillerShip?: string;
  KillerRank?: string;
  Killers?: Killer[];
}

export interface EscapeInterdiction extends EventED {
  Interdictor: string;
  IsPlayer: boolean;
}

export interface FactionKillBond extends EventED {
  Reward: number;
  AwardingFaction: string;
  VictimFaction: string;
}

export type HeatDamage = EventED;

export type HeatWarning = EventED;

export interface HullDamage extends EventED {
  Health: number;
}

export interface Interdicted extends EventED {
  Submitted: boolean;
  Interdicted: string;
  IsPlayer: boolean;
  CombatRank?: number;
  Faction?: string;
  Power?: boolean;
}

export interface PVPKill extends EventED {
  Victim: string;
  CombatRank: number;
}

export interface ShieldState extends EventED {
  ShieldsUp: boolean;
}
