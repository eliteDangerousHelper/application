<template>
  <div class="window docked-station">
    <div>
      {{ station.government }}
    </div>
    <div>
      {{ station.economy }}
    </div>
    <div>
      {{ station.faction.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/main/system";
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

<style lang="scss" scoped>
.docked-station {
  grid-area: docked-station;
}
</style>
