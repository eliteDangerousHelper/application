import { reactive } from "vue";

interface Station {
  name: string;
  type?: string;
  faction: {
    name: string;
    factionState: string;
  },
  government: string,
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
  dockedStation: {
    name: "test",
    economy: "testEco",
    faction: {
      factionState: "testFactionState",
      name: "testFactionName"
    },
    government: "testGovernement",
    marketId: 1234,
    services: [
      "Service1",
      "Service2",
      "Service3",
      "Service4",
      "Service5",
      "Service6",
      "Service7",
      "Service8",
      "Service932154865",
      "Service10",
      "Service11"
    ]
  }
});

export default { state };
