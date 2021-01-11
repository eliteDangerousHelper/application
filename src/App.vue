<template>
  <div v-if="true">
  <!-- <div v-if="journal !== undefined"> -->
    <el-container>
      <el-main>
        <el-row style="margin-top: 10px;" :gutter="20" type="flex">
          <Ranks></Ranks>
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
      </el-main>
    </el-container>
  </div>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Loader from "./components/Loader.vue";
import System from "./components/System.vue";
import Ship from "./components/Ship.vue";
import DockedStation from "./components/DockedStation.vue";
import DockedStationServices from "./components/DockedStationServices.vue";
import Commander from "./components/Commander.vue";
import Alert from "./components/Alert.vue";
import Ranks from "./components/Ranks.vue";
import store from "./store/game";
import systemStore from "./store/system";

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
    Alert
  },
  setup() {
    const journal = computed(() => store.state.journal);
    const dockedStation = ref(systemStore.state.dockedStation !== undefined);
    const span = ref(6);

    if (dockedStation.value) {
      span.value = 4;
    }

    return {
      journal,
      span,
      dockedStation
    };
  }
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
