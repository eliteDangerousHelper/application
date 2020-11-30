<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld v-if="loaded" msg="Welcome to Your Vue.js + TypeScript App" />
  <Loader v-else></Loader>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Loader from "./components/Loader.vue";
import store from "./store";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    Loader
  },
  setup() {
    const loaded = computed(() => store.state.GameStore.journal !== undefined);
    console.log(loaded.value);

    return {
      loaded
    };
  }
});
</script>

<style>
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
  color: #2c3e50;
  background-image: url("./assets/background.jpg");
  overflow: auto;
}
</style>
