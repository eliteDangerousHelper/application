import { MarketState } from "@/store/market";

export const getCommoditiesByInterestedPurchase = (state: MarketState) => {
  return state.commodities
    .filter(
      commoditie =>
        commoditie.buyPrice > 0 &&
        commoditie.meanPrice - commoditie.buyPrice > 0
    )
    .sort((a, b) => {
      const interrestA = a.meanPrice - a.buyPrice;
      const interrestB = b.meanPrice - b.buyPrice;
      if (interrestA < interrestB) {
        return 1;
      } else if (interrestA > interrestB) {
        return -1;
      } else {
        return 0;
      }
    });
};

export const getCommoditiesByInterestedSell = (state: MarketState) => {
  return state.commodities
    .filter(commoditie => commoditie.sellPrice - commoditie.meanPrice > 0)
    .sort((a, b) => {
      const interrestA = a.sellPrice - a.meanPrice;
      const interrestB = b.sellPrice - b.meanPrice;
      if (interrestA < interrestB) {
        return 1;
      } else if (interrestA > interrestB) {
        return -1;
      } else {
        return 0;
      }
    });
};
