<template>
  <div class="window2 systemScan">
    <el-row>
      <el-col :span="6" class="first">
        <div>{{ t("components.system.system") }}: {{ system.name }}</div>
      </el-col>
      <el-col :span="18">
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";
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
.first {
  margin-top: 87px;
}
</style>
