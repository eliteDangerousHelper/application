<template>
  <div class="window2 system-scan">
    <div class="first">
      <div>{{ t("components.system.system") }}: {{ system.name }}</div>
    </div>
    <div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/main/system";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "SystemScan",
  setup() {
    const system = computed(() => systemStore.state);
    const { t } = useI18n();
    return {
      system,
      t
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
