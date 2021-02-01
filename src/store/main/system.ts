import { reactive } from "vue";

interface Station {
  name: string;
  type?: string;
  faction: {
    name: string;
    factionState: string;
  };
  government: string;
  services: string[];
  economy: string;
  marketId: number;
}

export interface SystemState {
  name: string;
  security: string;
  allegiance?: string;
  economy: string;
  population: number;
  dockedStation?: Station;
}

const state: SystemState = reactive({
  name: "",
  security: "",
  population: 0,
  economy: "",
});

export default { state };
