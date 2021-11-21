<template>
  <div class="window system">
    <div>Sécurité: {{ system.security }}</div>
    <div>
      Allégence:
      {{ system.allegiance ?? "indépendant" }}
    </div>
    <div>Population: {{ population }}</div>
    <div>Economie: {{ system.economy }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";

export default defineComponent({
  name: "System",
  setup() {
    const system = computed(() => systemStore.state);
    const population = computed(() =>
      new Intl.NumberFormat().format(systemStore.state.population)
    );
    return {
      system,
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
