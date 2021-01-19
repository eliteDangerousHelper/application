<template>
  <div class="window2 market">
    <el-row>
      <el-col :span="6" class="first">
        <div>{{ t("components.market.id") }}: {{ market.id }}</div>
      </el-col>
      <el-col :span="9">
        <div>{{ t("components.market.buy") }}</div>
      </el-col>
      <el-col :span="9">
        <div>{{ t("components.market.send") }}</div>
      </el-col>
    </el-row>
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
.first {
  margin-top: 87px;
}
</style>
