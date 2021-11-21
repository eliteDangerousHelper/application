import { reactive } from "vue";

export interface GameState {
  launch: boolean;
  horizons: boolean;
  mode: string;
  group?: string;
  gameMode: "Combat" | "Exploration" | "Mining" | "Station"
}

const state: GameState = reactive({
  launch: false,
  horizons: true,
  mode: "Solo",
  gameMode: "Exploration"
});

export default { state };
