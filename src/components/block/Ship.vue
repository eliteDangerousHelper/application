<template>
  <div class="window ship">
    <div>
      {{ t("components.ship.remainingFuel") }}: {{ ship.fuel.level }}/{{
        ship.fuel.capacity
      }}
    </div>
    <div>
      {{ t("components.ship.cargo") }}: {{ ship.cargo.used }}/{{
        ship.cargo.capacity
      }}
    </div>
    <div>{{ t("components.ship.type") }}: {{ ship.type }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import shipStore from "@/store/main/ship";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Ship",
  setup() {
    const ship = computed(() => shipStore.state);
    const { t } = useI18n();
    return {
      ship,
      t
    };
  }
});
</script>

<style lang="scss" scoped>
.ship {
  grid-area: ship;
}
</style>
