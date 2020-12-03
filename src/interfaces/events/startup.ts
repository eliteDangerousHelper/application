import { EventED } from './base';

export interface Heading extends EventED {
  part: number;
  language: string;
  gameversion: string;
  build: string;
}

export interface ClearSavedGame extends EventED {
  Name: string;
}

export interface NewCommander extends EventED {
  Name: string;
  Package: string;
}

export interface LoadGame extends EventED {
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
