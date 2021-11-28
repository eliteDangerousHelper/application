import { MultiSellExplorationData } from "@/types/events/exploration";
import CommanderStore from "@/store/commander";

export const multiSellExplorationData = (event: MultiSellExplorationData) => {
  CommanderStore.state.credit += event.TotalEarnings
};