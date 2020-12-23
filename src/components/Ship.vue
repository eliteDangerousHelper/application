<template>
  <el-card>
    <template #header>
      <div class="clearfix">
        <span>{{ t("components.ship.ship") }}: {{ ship.name }}</span>
      </div>
    </template>
    <div>{{ t("components.ship.remainingFuel") }}: {{ ship.fuel.level }}/{{ ship.fuel.capacity }}</div>
    <div>{{ t("components.ship.type") }}: {{ ship.type }}</div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import shipStore from "@/store/ship";
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
