<template>
  <div class="window2 market">
    <div class="first">
      <div>{{ t("components.market.id") }}: {{ market.id }}</div>
    </div>
    <div>
      <div>
        {{ t("components.market.buy") }}
        ({{ commoditiesInterestedPurchase.length }})
      </div>
      <div
        v-for="commodity in commoditiesInterestedPurchase"
        :key="commodity.id"
      >
        {{ commodity.nameLocalised }}
      </div>
    </div>
    <div>
      <div>
        {{ t("components.market.send") }}
        ({{ commoditiesInterestedSell.length }})
      </div>
      <div v-for="commodity in commoditiesInterestedSell" :key="commodity.id">
        {{ commodity.nameLocalised }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import marketStore from "@/store/main/market";
import { useI18n } from "vue-i18n";
import {
  getCommoditiesByInterestedPurchase,
  getCommoditiesByInterestedSell
} from "@/utils/market";

export default defineComponent({
  name: "Market",
  setup() {
    const market = computed(() => marketStore.state);
    const { t } = useI18n();
    const commoditiesInterestedPurchase = computed(() =>
      getCommoditiesByInterestedPurchase(marketStore.state).slice(0, 15)
    );
    const commoditiesInterestedSell = computed(() =>
      getCommoditiesByInterestedSell(marketStore.state).slice(0, 14)
    );
    return {
      market,
      t,
      commoditiesInterestedPurchase,
      commoditiesInterestedSell
    };
  }
});
</script>

<style lang="scss" scoped>
.market {
  grid-area: market;
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  gap: 10px;
}
.first {
  margin-top: 110px;
}
</style>
