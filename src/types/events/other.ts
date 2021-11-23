import { EventED } from "./base";

export interface ApproachSettlement extends EventED {
  BodyID: number;
  BodyName: string;
  Latitude: number;
  Longitude: number;
  MarketID: number;
  Name: string;
  SystemAddress: number;
}

export interface ReceiveText extends EventED {
  From: string;
  Message: string;
  Message_Localised: string;
  Channel: string;
}