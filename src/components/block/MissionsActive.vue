<template>
  <div class="window missions-active">
    <div>{{ t("components.missions.active") }}</div>
    <div class="missions">
      <div v-for="mission in missions" :key="mission.id">
        {{ mission.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import missionsStore from "@/store/main/missions";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "missionsActive",
  setup() {
    const missions = missionsStore.getActiveMissions;
    console.log(missions);

    const { t } = useI18n();

    return {
      t,
      missions
    };
  }
});
</script>

<style lang="scss" scoped>
.missions-active {
  grid-area: missions-active;
}
.missions {
  overflow: hidden;
  height: 40%;
}
.item {
  margin-right: 40px;
  margin-top: 15px;
}
</style>
