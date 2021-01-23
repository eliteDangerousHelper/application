<template>
  <div class="window2 market">
    <div class="first">
      <div>{{ t("components.market.id") }}: {{ market.id }}</div>
    </div>
    <div>
      <div>{{ t("components.market.buy") }}</div>
    </div>
    <div>
      <div>{{ t("components.market.send") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import marketStore from "@/store/main/market";
import { useI18n } from "vue-i18n";
import { getCommoditiesByInterestedPurchase } from "@/utils/market";

export default defineComponent({
  name: "Market",
  setup() {
    const market = computed(() => marketStore.state);
    const { t } = useI18n();
    const commoditiesInterestedPurchase = computed(() =>
      getCommoditiesByInterestedPurchase(marketStore.state)
    );
    return {
      market,
      t,
      commoditiesInterestedPurchase
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
