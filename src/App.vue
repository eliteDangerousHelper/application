<template>
  <transition name="no-mode-fade">
    <div v-if="launch" class="main">
      <Ranks></Ranks>
      <Reputations></Reputations>
      <Actions></Actions>
      <Commander></Commander>
      <System></System>
      <MissionsActive></MissionsActive>
      <MissionsComplete></MissionsComplete>
      <Ship></Ship>
      <Message></Message>
      <component :is="mode"></component>
    </div>
    <div v-else class="main-waiting">
      <Loader></Loader>
      <Actions></Actions>
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Loader from "@/components/block/Loader.vue";
import System from "@/components/block/System.vue";
import Actions from "@/components/block/Actions.vue";
import Reputations from "@/components/block/Reputations.vue";
import Ship from "@/components/block/Ship.vue";
import Market from "@/components/block/Market.vue";
import SystemScan from "@/components/block/SystemScan.vue";
import DockedStation from "@/components/block/DockedStation.vue";
import DockedStationServices from "@/components/block/DockedStationServices.vue";
import Commander from "@/components/block/Commander.vue";
import Message from "@/components/block/Message.vue";
import MissionsActive from "@/components/block/MissionsActive.vue";
import MissionsComplete from "@/components/block/MissionsComplete.vue";
import Ranks from "@/components/block/Ranks.vue";
import gameStore from "@/store/main/game";
import systemStore from "@/store/main/system";
import Combat from "@/components/mode/Combat.vue";
import Exploration from "@/components/mode/Exploration.vue";
import Mining from "@/components/mode/Mining.vue";
import Station from "@/components/mode/Station.vue";

export default defineComponent({
  name: "App",
  components: {
    Loader,
    Ranks,
    System,
    Ship,
    DockedStation,
    DockedStationServices,
    Commander,
    Message,
    Actions,
    Market,
    SystemScan,
    Reputations,
    Combat,
    Exploration,
    Mining,
    Station,
    MissionsActive,
    MissionsComplete
  },
  setup() {
    const dockedStation = ref(systemStore.state.dockedStation !== undefined);
    const launch = computed(() => gameStore.state.launch);
    const span = ref(6);
    const mode = computed(() => gameStore.state.gameMode);

    if (dockedStation.value) {
      span.value = 4;
    }

    return {
      span,
      dockedStation,
      launch,
      mode
    };
  }
});
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto);

html,
body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.main {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr) 2fr;
  grid-template-areas:
    "ranks ranks ranks reputations reputations actions"
    "commander system missions-active missions-complete ship message"
    "mode mode mode mode mode mode";
  align-items: center;
  justify-items: center;
  height: 100vh;
}

.main-waiting {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  height: 100vh;

  .actions {
    grid-area: initial;
    grid-column: 3;
    grid-row: 1;
  }

  .loader {
    grid-area: initial;
    grid-column: 2;
    grid-row: 2;
  }
}

#app {
  height: 100%;
  font-family: "Roboto", Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url("./assets/background.jpg");
  overflow: auto;
  color: aqua;
}

.window {
  background-image: url("./assets/ui/window1.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 217px;
  height: 140px;
  padding: 60px 30px 0 50px;
  position: relative;
}

.window2 {
  background-image: url("./assets/ui/window2.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 545px;
  height: 300px;
  padding: 105px 145px 130px 127px;
  position: relative;
}

.window5 {
  background-image: url("./assets/ui/window5.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 215px;
  height: 112px;
  padding: 60px 62px 50px 65px;
  position: relative;
}
</style>

<style lang="scss" scoped>
.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity 1.5s;
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0;
}
</style>
