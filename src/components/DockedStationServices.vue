<template>
  <div class="window docked-station-services">
    <el-row type="flex">
      <el-col v-for="service in station.services" :key="service" :span="12">
        {{ service }}
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/main/system";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "DockedStationServices",
  setup() {
    const station = computed(() => systemStore.state.dockedStation);
    const { t } = useI18n();
    return {
      station,
      t
    };
  }
});
</script>

<style lang="scss">
.window.docked-station-services {
  padding: 60px 30px 0 50px;
  width: 217px;
}
</style>
