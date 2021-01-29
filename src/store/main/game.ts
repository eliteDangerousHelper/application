import { reactive } from "vue";

export interface GameState {
  launch: boolean;
  horizons: boolean;
  mode: string;
  group?: string;
}

const state: GameState = reactive({
  launch: false,
  horizons: true,
  mode: "Solo"
});

export default { state };
