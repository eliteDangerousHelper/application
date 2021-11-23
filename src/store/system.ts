import { reactive } from "vue";

interface Station {
  name: string;
  type?: string;
  faction?: {
    name: string;
    factionState: string;
  };
  government?: string;
  services?: string[];
  economy?: string;
  marketId: number;
}

interface System {
  name: string;
  security: string;
  allegiance?: string;
  economy: string;
  population: number;
  dockedStation?: Station;
}

interface Destination {
  name: string;
  starClass: string;
  address: number;
  remaining?: number;
}

export interface SystemState {
  actual: System;
  destination?: Destination;
}

const state: SystemState = reactive({
  actual: {
    name: "",
    security: "",
    population: 0,
    economy: "",
  }
});

export default { state };
