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
  };
  engineers: Engineers[];
  squadron?: {
    name: string;
    rank: number;
  };
}

const state: CommanderState = reactive({
  name: "",
  fid: "",
  credit: 0,
  loan: 0,
  reputation: {
    empire: 0,
    federation: 0
  },
  engineers: []
});

export default { state };
