<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span
          >{{ t("components.dockedStation.station") }}: {{ station.name }}</span
        >
      </div>
    </template>
    <div>
      <el-tag
        effect="dark"
        type="info"
        v-for="service in station.services"
        :key="service"
        style="margin-left: 10px;"
      >
        {{ service }}
      </el-tag>
    </div>
    <div>
      {{ t("components.dockedStation.government") }}: {{ station.government }}
    </div>
    <div>
      {{ t("components.dockedStation.economy") }}: {{ station.economy }}
    </div>
    <div>
      {{ t("components.dockedStation.leadingFaction") }}:
      {{ station.faction.name }}
    </div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "DockedStation",
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
