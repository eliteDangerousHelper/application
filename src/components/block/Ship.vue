<template>
  <div class="window ship">
    <div>
      Carburant restant: {{ ship.fuel.level }}/{{
        ship.fuel.capacity
      }}
    </div>
    <div>
      Cargo: {{ ship.cargo.used }}/{{
        ship.cargo.capacity
      }}
    </div>
    <div>Type: {{ ship.type }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import shipStore from "@/store/ship";

export default defineComponent({
  name: "Ship",
  setup() {
    const ship = computed(() => shipStore.state);
    return {
      ship,
    };
  }
});
</script>

<style lang="scss" scoped>
.ship {
  grid-area: ship;
}
</style>
