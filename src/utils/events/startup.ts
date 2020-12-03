import { Heading, Progress, Rank, Shutdown } from '@/interfaces/events/startup';
import rankStore from "@/store/ranks";
import gameStore from "@/store/game";

export const fileheader = (event: Heading) => {
  console.log('fileheader :', event);
}

export const shutdown = (event: Shutdown) => {
  gameStore.state.journal = undefined
}

export const progress = (event: Progress) => {
  rankStore.state.CQC.percent = event.CQC
  rankStore.state.Combat.percent = event.Combat
  rankStore.state.Empire.percent = event.Empire
  rankStore.state.Explore.percent = event.Explore
  rankStore.state.Federation.percent = event.Federation
  rankStore.state.Trade.percent = event.Trade
}

export const rank = (event: Rank) => {
  rankStore.state.CQC.level = event.CQC
  rankStore.state.Combat.level = event.Combat
  rankStore.state.Empire.level = event.Empire
  rankStore.state.Explore.level = event.Explore
  rankStore.state.Federation.level = event.Federation
  rankStore.state.Trade.level = event.Trade
}