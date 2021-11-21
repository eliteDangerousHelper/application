<template>
  <div class="mode">
    In Exploration
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExplorationMode",
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
