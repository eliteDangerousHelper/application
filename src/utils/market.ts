import { MarketState } from "@/store/main/market";

export const getCommoditiesByInterestedPurchase = (state: MarketState) => {
  return state.commodities.filter(
    commoditie => commoditie.MeanPrice - commoditie.BuyPrice > 0
  ).sort((a, b) => {
    const interrestA = a.MeanPrice - a.BuyPrice;
    const interrestB = b.MeanPrice - b.BuyPrice;
    if (interrestA < interrestB) {
      return 1;
    } else if (interrestA > interrestB) {
      return -1;
    } else {
      return 0;
    }
  })
}