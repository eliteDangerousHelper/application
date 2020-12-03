import { EventED } from './base';

export interface Docked extends EventED {
  StationName: string;
  StationType: string;
  StarSystem: string;
  Faction: string;
  FactionState: string;
  Allegiance: string;
  Economy: string;
  Government: string;
  Security: string;
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
  StarPos: string;
  Body: string;
  JumpDist: number;
  FuelUsed: number;
  FuelLevel: number;
  BoostUsed: number;
  Faction: string;
  FactionState: string;
  Allegiance: string;
  Economy: string;
  Government: string;
  Security: string;
}

export interface Liftoff extends EventED {
  Latitude: number;
  Longitude: number;
}

export interface Location extends EventED {
  StarSystem: string;
  StarPos: object;
  Body: string;
  BodyType: string;
  Docked: boolean;
  StationName?: string;
  StationType?: string;
  Faction: string;
  FactionState: string;
  Allegiance: string;
  Economy: string;
  Government: string;
  Security: string;
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
