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
import systemStore from "@/store/system";

export default defineComponent({
  name: "DockedStation",
  setup() {
    const station = computed(() => systemStore.state.actual.dockedStation);
    return {
      station,
    };
  }
});
</script>

<style lang="scss" scoped>
.docked-station {
  grid-area: docked-station;
}
</style>
