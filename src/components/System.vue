<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span>{{ t("components.system.system") }}: {{ system.name }}</span>
      </div>
    </template>
    <div>{{ t("components.system.security") }}: {{ system.security }}</div>
    <div>
      {{ t("components.system.allegency") }}: {{ system.allegiance ?? "indépendant" }}
    </div>
    <div>{{ t("components.system.population") }}: {{ system.population }}</div>
    <div>{{ t("components.system.economy") }}: {{ system.economy }}</div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "System",
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
