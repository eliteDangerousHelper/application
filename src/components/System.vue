<template>
  <el-card :body-style="{ padding: '0px' }">
    <template #header>
      <div class="clearfix">
        <span>Système: {{ system.name }}</span>
      </div>
    </template>
    <div>Securité: {{ system.security }}</div>
    <div>Allégence: {{ system.allegiance ?? "indépendant" }}</div>
    <div>Population: {{ system.population }}</div>
    <div>Economie: {{ system.economy }}</div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";

export default defineComponent({
  name: "System",
  setup() {
    const system = computed(() => systemStore.state);
    return {
      system
    };
  }
});
</script>

<style scoped>
.ranks {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
</style>
