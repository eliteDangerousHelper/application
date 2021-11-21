<template>
  <div class="window missions-complete">
    <div>Terminées</div>
    <div class="missions">
      <div v-for="mission in missions" :key="mission.id">
        {{ mission.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import missionsStore from "@/store/missions";

export default defineComponent({
  name: "missionsComplete",
  setup() {
    const missions = missionsStore.getCompleteMissions;

    return {
      missions
    };
  }
});
</script>

<style lang="scss" scoped>
.missions-complete {
  grid-area: missions-complete;
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
