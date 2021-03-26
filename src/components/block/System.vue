<template>
  <div class="window system">
    <div>{{ t("components.system.security") }}: {{ system.security }}</div>
    <div>
      {{ t("components.system.allegency") }}:
      {{ system.allegiance ?? "indépendant" }}
    </div>
    <div>{{ t("components.system.population") }}: {{ population }}</div>
    <div>{{ t("components.system.economy") }}: {{ system.economy }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/main/system";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "System",
  setup() {
    const system = computed(() => systemStore.state);
    const { t } = useI18n();
    const population = computed(() =>
      new Intl.NumberFormat().format(systemStore.state.population)
    );
    return {
      system,
      t,
      population
    };
  }
});
</script>

<style lang="scss" scoped>
.system {
  grid-area: system;
}
</style>
