import { reactive } from "vue";

export interface Rank {
  name: string;
  percent: number;
  level: number;
  icon: string;
}

export interface RanksState {
  Combat: Rank;
  Trade: Rank;
  Explore: Rank;
  Empire: Rank;
  Federation: Rank;
  CQC: Rank;
}

const state: RanksState = reactive({
  Combat: {
    name: "Combat",
    icon: "Combat",
    percent: 0,
    level: 0
  },
  Trade: {
    name: "Trade",
    icon: "Trade",
    percent: 10,
    level: 0
  },
  Explore: {
    name: "Explore",
    icon: "Explore",
    percent: 35,
    level: 0
  },
  Empire: {
    name: "Empire",
    icon: "Empire",
    percent: 75,
    level: 0
  },
  Federation: {
    name: "Federation",
    icon: "Federation",
    percent: 99,
    level: 0
  },
  CQC: {
    name: "CQC",
    icon: "CQC",
    percent: 50,
    level: 0
  }
});

export default { state };
