<template>
  <div class="window commander">
    <div>{{ t("components.commander.credit") }}: {{ commander.credit }}</div>
    <div>{{ t("components.commander.loan") }}: {{ commander.loan }}</div>
    <div v-if="commander.squadron">
      {{ t("components.commander.squadron") }}:
      {{ commander.squadron.name }} ({{ t("components.commander.rank") }}:
      {{ commander.squadron.rank }})
    </div>
    <div>Empire: {{ commander.reputation.empire }}</div>
    <div>Federation: {{ commander.reputation.federation }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import commanderStore from "@/store/commander";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Commander",
  setup() {
    const commander = computed(() => commanderStore.state);
    const { t } = useI18n();

    return {
      commander,
      t
    };
  }
});
</script>

<style lang="scss" scoped>
.item {
  margin-right: 40px;
  margin-top: 15px;
}
</style>
