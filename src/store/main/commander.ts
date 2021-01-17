import { reactive } from "vue";

export interface Engineers {
  name: string;
  id: number;
  progress: string;
}

export interface CommanderState {
  name: string;
  fid: string;
  credit: number;
  loan: number;
  reputation: {
    empire: number;
    federation: number;
  },
  engineers: Engineers[],
  squadron?: {
    name: string;
    rank: number;
  }
}

const state: CommanderState = reactive({
  name: "",
  fid: "",
  credit: 63534982,
  loan: 250043,
  reputation: {
    empire: 0.405014,
    federation: 77.125900,
  },
  engineers: [],
});

export default { state };
