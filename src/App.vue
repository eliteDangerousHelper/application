<template>
  <div v-if="true">
    <el-container>
      <el-main>
        <el-row style="margin-top: 10px;" :gutter="20" type="flex">
          <el-col :span="12">
            <Ranks></Ranks>
          </el-col>
          <el-col :span="7">
            <Reputations></Reputations>
          </el-col>
          <el-col :span="5">
            <Actions></Actions>
          </el-col>
        </el-row>
        <el-row style="margin-top: 10px;" :gutter="20" type="flex">
          <el-col :span="span">
            <Commander></Commander>
          </el-col>
          <el-col :span="span">
            <System></System>
          </el-col>
          <el-col :span="span" v-if="dockedStation">
            <DockedStation></DockedStation>
          </el-col>
          <el-col :span="span" v-if="dockedStation">
            <DockedStationServices></DockedStationServices>
          </el-col>
          <el-col :span="span">
            <Ship></Ship>
          </el-col>
          <el-col :span="span">
            <Alert></Alert>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <Market></Market>
          </el-col>
          <el-col :span="12">
            <SystemScan></SystemScan>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Loader from "./components/Loader.vue";
import System from "./components/System.vue";
import Actions from "./components/Actions.vue";
import Reputations from "./components/Reputations.vue";
import Ship from "./components/Ship.vue";
import Market from "./components/Market.vue";
import SystemScan from "./components/SystemScan.vue";
import DockedStation from "./components/DockedStation.vue";
import DockedStationServices from "./components/DockedStationServices.vue";
import Commander from "./components/Commander.vue";
import Alert from "./components/Alert.vue";
import Ranks from "./components/Ranks.vue";
import systemStore from "./store/main/system";

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
  height: 100%;
  overflow: hidden;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px;
  border: 10px solid rgba(255, 255, 255, 0);
  cursor: pointer;
  background-color: initial;

  > .text {
    position: relative;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      aqua 0%,
      aqua 50%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    background-repeat: repeat;
    background-size: 200%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    background-clip: text;
    transition: background-position 300ms;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0);
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform 300ms;
  }

  &:hover {
    .text {
      background-position: 0 0;
    }

    &::before {
      transform-origin: 0 0;
      transform: scale3d(1, 1, 1);
    }
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

.el-card {
  border: 1px solid rgba(41, 41, 41, 0.95);

  .el-card__header,
  .el-card__body {
    background-color: rgba(41, 41, 41, 0.95);
    color: #eee;
  }

  .el-card__body {
    height: 100%;
  }
}
</style>
