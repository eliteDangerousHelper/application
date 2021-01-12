import { reactive } from "vue";

export interface MarketState {
  id: number;
}

const state: MarketState = reactive({
  id: 287467
});

export default { state };
