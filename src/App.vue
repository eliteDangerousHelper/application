<template>
  <div v-if="true">
  <!-- <div v-if="journal !== undefined"> -->
    <el-container>
      <el-main>
        <Ranks></Ranks>
        <el-row style="margin-top: 10px;">
          <el-column>
            <System></System>
          </el-column>
        </el-row>
      </el-main>
    </el-container>
  </div>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Loader from "./components/Loader.vue";
import System from "./components/System.vue";
import Ranks from "./components/Ranks.vue";
import store from "./store/game";

export default defineComponent({
  name: "App",
  components: {
    Loader,
    Ranks,
    System
  },
  setup() {
    const journal = computed(() => store.state.journal);

    return {
      journal
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
}

.el-card {
  border: 1px solid rgba(41, 41, 41, 0.95);

  .el-card__header,
  .el-card__body {
    background-color: rgba(41, 41, 41, 0.95);
    color: #eee;
  }
}
</style>
