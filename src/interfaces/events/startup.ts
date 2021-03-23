import { EventED } from "./base";

interface Mission {
  MissionID: number;
  Name: string;
  PassengerMission: boolean;
  Expires: number;
}

export interface Heading extends EventED {
  part: number;
  language: string;
  gameversion: string;
  build: string;
}

export interface Loadout extends EventED {
  "Ship": string;
  "ShipID": number;
  "ShipName": string;
  "ShipIdent": string;
  "HullValue": number;
  "ModulesValue": number;
  "HullHealth": number;
  "UnladenMass": number;
  "CargoCapacity": number;
  "MaxJumpRange": number;
  "FuelCapacity": {
    "Main": number;
    "Reserve": number;
  };
  "Rebuy": number;
  "Modules":{
    "Slot": string;
    "Item": string;
    "On": boolean;
    "Priority": number;
    "Health": number;
  }[]
}

export interface Engineer {
  Engineer: string;
  EngineerID: number;
  Progress: string;
}

export interface Missions extends EventED {
  Active: Mission[];
  Failed: Mission[];
  Complete: Mission[];
}

export type Shutdown = EventED;

export interface ClearSavedGame extends EventED {
  Name: string;
}

export interface NewCommander extends EventED {
  Name: string;
  Package: string;
}

export interface Commander extends EventED {
  FID: string;
  Name: string;
}

export interface Reputation extends EventED {
  Empire: number;
  Federation: number;
}

export interface EngineerProgress extends EventED {
  Engineers: Engineer[];
}

export interface SquadronStartup extends EventED {
  SquadronName: string;
  CurrentRank: number;
}

export interface LoadGame extends EventED {
  FID: string;
  Horizons: boolean;
  Ship_Localised: string;
  ShipName: string;
  ShipIdent: string;
  FuelLevel: number;
  FuelCapacity: number;
  Commander: string;
  Ship: string;
  ShipID: number;
  GameMode: string;
  Group: string;
  Credits: number;
  Loan: number;
}

export interface Progress extends EventED {
  Combat: number;
  Trade: number;
  Explore: number;
  Empire: number;
  Federation: number;
  CQC: number;
}

export interface Rank extends EventED {
  Combat: number;
  Trade: number;
  Explore: number;
  Empire: number;
  Federation: number;
  CQC: number;
}
