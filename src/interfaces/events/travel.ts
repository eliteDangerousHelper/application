import { EventED } from "./base";

interface StationEconomie {
  Name: string;
  Name_Localised: string;
  Proportion: number;
}

interface RecoveringState {
  State: string;
  Trend: number;
}

interface ActiveState {
  State: string;
}

export interface Cargo extends EventED {
  Count: number;
}

interface Faction {
  Name: string;
  FactionState: string;
  Government: string;
  Influence: number;
  Allegiance: string;
  Happiness: string;
  Happiness_Localised: string;
  MyReputation: number;
  RecoveringStates?: RecoveringState[];
  ActiveStates?: ActiveState[];
  SquadronFaction?: boolean;
  HomeSystem?: boolean;
}

interface Conflict {
  WarType: string;
  Status: string;
  Faction1: {
    Name: string;
    Stake: string;
    WonDays: number;
  };
  Faction2: {
    Name: string;
    Stake: string;
    WonDays: number;
  };
}

export interface Docked extends EventED {
  StationName: string;
  StationType: string;
  StarSystem: string;
  StationFaction: Faction;
  StationAllegiance: string;
  StationEconomy: string;
  StationEconomy_Localised: string;
  StationGovernment: string;
  StationGovernment_Localised: string;
  StationSecurity: string;
  StationServices: string[];
  StationEconomies: StationEconomie[];
  DistFromStarLS: number;
  MarketID: number;
  SystemAddress: number;
}

export interface DockingCancelled extends EventED {
  StationName: string;
}

export interface DockingDenied extends EventED {
  StationName: string;
  Reason: string;
}

export interface DockingGranted extends EventED {
  StationName: string;
  LandingPad: number;
}

export interface DockingRequested extends EventED {
  StationName: string;
}

export interface DockingTimeout extends EventED {
  StationName: string;
}

export interface FSDJump extends EventED {
  StarSystem: string;
  SystemAddress: number;
  StarPos: number[];
  SystemAllegiance: string;
  SystemEconomy: string;
  SystemEconomy_Localised: string;
  SystemSecondEconomy: string;
  SystemSecondEconomy_Localised: string;
  SystemGovernment: string;
  SystemGovernment_Localised: string;
  SystemSecurity: string;
  SystemSecurity_Localised: string;
  Population: number;
  Body: string;
  BodyID: number;
  BodyType: string;
  JumpDist: number;
  FuelUsed: number;
  FuelLevel: number;
}

export interface Liftoff extends EventED {
  Latitude: number;
  Longitude: number;
}

export interface Location extends EventED {
  Docked: boolean;
  StationName: string;
  StationType: string;
  MarketID: number;
  StationFaction: {
    Name: string;
    FactionState: string;
  };
  StationGovernment: string;
  StationGovernment_Localised: string;
  StationServices: string[];
  StationEconomy: string;
  StationEconomy_Localised: string;
  StationEconomies: StationEconomie[];
  StarSystem: string;
  SystemAddress: number;
  StarPos: number[];
  SystemAllegiance: string;
  SystemEconomy: string;
  SystemEconomy_Localised: string;
  SystemSecondEconomy: string;
  SystemSecondEconomy_Localised: string;
  SystemGovernment: string;
  SystemGovernment_Localised: string;
  SystemSecurity: string;
  SystemSecurity_Localised: string;
  Population: number;
  Body: string;
  BodyID: number;
  BodyType: string;
  Factions: Faction[];
  SystemFaction: {
    Name: string;
    FactionState: string;
  };
  Conflicts: Conflict[];
}

export interface SupercruiseEntry extends EventED {
  Starsystem: string;
}

export interface SupercruiseExit extends EventED {
  Starsystem: string;
  Body: string;
  BodyType: string;
}

export interface Touchdown extends EventED {
  Latitude: number;
  Longitude: number;
}

export interface Undocked extends EventED {
  StationName: string;
}
