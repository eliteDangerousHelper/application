<template>
  <div class="window2 system-scan">
    <div class="first">
      <div>Système: {{ system.name }}</div>
    </div>
    <div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";

export default defineComponent({
  name: "SystemScan",
  setup() {
    const system = computed(() => systemStore.state);
    return {
      system,
    };
  }
});
</script>

<style lang="scss" scoped>
.system-scan {
  grid-area: system-scan;
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 10px;
}
.first {
  margin-top: 110px;
}
</style>
