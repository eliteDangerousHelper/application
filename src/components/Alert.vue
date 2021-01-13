<template>
  <div class="window alert">
    <div>{{ alert.message }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import alertStore from "@/store/main/alert";

export default defineComponent({
  name: "Alert",
  setup() {
    const alert = computed(() => alertStore.state);

    return {
      alert
    };
  }
});
</script>

<style lang="scss" scoped>
.item {
  margin-right: 40px;
  margin-top: 15px;
}
</style>
