<template>
  <div class="mode">
    Docked in station
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StationMode",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.mode {
  grid-area: mode;
}
</style>
