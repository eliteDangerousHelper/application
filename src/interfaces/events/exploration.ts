import { EventED } from './base';

interface Ring {
  Name: string;
  RingClass: string;
  MassMT: number;
  InnerRad: number;
  OuterRad: number;
}

interface Material {
  Name: string;
  percent: number;
}

export interface Scan extends EventED {
  Bodyname : string;
  DistanceFromArrivalLS : number;
  Rings?: Ring[];
}

export interface ScanStar extends Scan {
  StarType: string;
  StellarMass: number;
  Radius: number;
  AbsoluteMagnitude: number;
  RotationPeriod: number;
  SurfaceTemperature: number;
  Age_MY: number;
}

export interface ScanPlanet extends Scan {
  TidalLock: boolean;
  TerraformState: "Terraformable"|"Terraforming"|"Terraformed"|null;
  PlanetClass: string;
  Atmosphere: string;
  Volcanism: string;
  SurfaceGravity: number;
  SurfaceTemperature: number;
  SurfacePressure: number;
  Landable: boolean;
  Materials: Material[];
  RotationPeriod: number;
}

export interface MaterialCollected extends EventED {
  Category: "Raw"|"Encoded"|"Manufactured";
  Name: string;
  Count: number;
}

export interface MaterialDiscarded extends EventED {
  Category: "Raw"|"Encoded"|"Manufactured";
  Name: string;
  Count: number;
}

export interface MaterialDiscovered extends EventED {
  Category: "Raw"|"Encoded"|"Manufactured";
  Name: string;
  DiscoveryNumber: number;
}

export interface BuyExplorationData extends EventED {
  System: string;
  Cost: number;
}

export interface SellExplorationData extends EventED {
  Systems: string[];
  Discovered: string[];
  BaseValue: number;
  Bonus: number;
}

export interface Screenshot extends EventED {
  Filename: string;
  Width: number;
  Height: number;
  System: string;
  Body: string;
}