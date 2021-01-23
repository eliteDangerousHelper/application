<template>
  <div v-if="true" class="main">
    <Ranks></Ranks>
    <Reputations></Reputations>
    <Actions></Actions>
    <Commander></Commander>
    <System></System>
    <DockedStation></DockedStation>
    <DockedStationServices v-if="dockedStation"></DockedStationServices>
    <Ship></Ship>
    <Alert></Alert>
    <Market></Market>
    <SystemScan></SystemScan>
  </div>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Loader from "@/components/view/Loader.vue";
import System from "@/components/view/System.vue";
import Actions from "@/components/view/Actions.vue";
import Reputations from "@/components/view/Reputations.vue";
import Ship from "@/components/view/Ship.vue";
import Market from "@/components/view/Market.vue";
import SystemScan from "@/components/view/SystemScan.vue";
import DockedStation from "@/components/view/DockedStation.vue";
import DockedStationServices from "@/components/view/DockedStationServices.vue";
import Commander from "@/components/view/Commander.vue";
import Alert from "@/components/view/Alert.vue";
import Ranks from "@/components/view/Ranks.vue";
import systemStore from "@/store/main/system";

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
    Alert,
    Actions,
    Market,
    SystemScan,
    Reputations
  },
  setup() {
    const dockedStation = ref(systemStore.state.dockedStation !== undefined);
    const span = ref(6);

    if (dockedStation.value) {
      span.value = 4;
    }

    return {
      span,
      dockedStation
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
    "commander system docked-station docked-station-services ship alert"
    "market market market system-scan system-scan system-scan";
  align-items: center;
  justify-items: center;
  height: 100vh;
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
