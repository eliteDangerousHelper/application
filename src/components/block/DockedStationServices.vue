<template>
  <div class="window docked-station-services">
    <div v-for="service in services" :key="service">
      {{ service }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import systemStore from "@/store/system";

export default defineComponent({
  name: "DockedStationServices",
  setup() {
    const services = computed(() =>
      systemStore.state.actual.dockedStation?.services ? systemStore.state.actual.dockedStation?.services.slice(0, 9) : ""
    );
    return {
      services,
    };
  }
});
</script>

<style lang="scss">
.docked-station-services {
  grid-area: docked-station-services;
  display: grid;
  grid-template-columns: minmax(auto, 47%) minmax(auto, 47%);
  column-gap: 6%;
  grid-template-rows: 20px;
  grid-auto-rows: 20px;

  div {
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.window.docked-station-services {
  padding: 60px 30px 0 50px;
  width: 217px;
}
</style>
