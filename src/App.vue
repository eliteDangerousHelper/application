<template>
  <!-- <div v-if="journal !== undefined" /> -->
  <div v-if="true">
    <Ranks></Ranks>
  </div>
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Loader from "./components/Loader.vue";
import Ranks from "./components/Ranks.vue";
import store from "./store/game";

export default defineComponent({
  name: "App",
  components: {
    Loader,
    Ranks
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

  .el-card__body {
    background-color: rgba(41, 41, 41, 0.95);
    color: #eee;
  }
}
</style>
