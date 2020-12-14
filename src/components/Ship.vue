<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span>Vaisseau: {{ ship.name }}</span>
      </div>
    </template>
    <div>Carburant restant: {{ ship.fuel.level }}/{{ ship.fuel.capacity }}</div>
    <div>Type: {{ ship.type }}</div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import shipStore from "@/store/ship";

export default defineComponent({
  name: "Ship",
  setup() {
    const ship = computed(() => shipStore.state);
    return {
      ship
    };
  }
});
</script>
