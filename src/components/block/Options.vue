<template>
  <div>{{ gameDir }}</div>
  <Button @click.prevent="selectDir">Changer de dossier</Button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import optionsStore from "@/store/options";
import Button from "../ui/Button.vue";

const { ipcRenderer } = window.require("electron");

export default defineComponent({
  name: "Options",
  components: {
    Button
  },
  setup() {
    const gameDir = computed(() => optionsStore.state.gameDir);

    const selectDir = () => {
      ipcRenderer.send("select-gamedir");
    };

    return {
      gameDir,
      selectDir
    };
  }
});
</script>

<style lang="scss" scoped>
.selectbox {
  width: 200px;
  height: 30px;
  background: none;
  box-shadow: inset 0 0 1em rgba(0, 170, 170, 0.5),
    0 0 1em rgba(0, 170, 170, 0.5);
  border: #0dd solid 2px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -100px;

  &:hover {
    background-color: #0dd;
    box-shadow: inset 0 0 0 rgba(0, 170, 170, 0.5),
      0 0 1.5em rgba(0, 170, 170, 0.7);
  }
}

.selectbox::after {
  font-family: "Roboto";
  content: "v";
  display: block;
  position: absolute;
  right: 20px;
  font-size: 16px;
  top: 7px;
  color: #fff;
}
.selectbox span {
  position: absolute;
  top: 6px;
  left: 10px;
  font-family: "Roboto";
  font-size: 16px;
  color: #fff;
  font-weight: 300;
}
select {
  width: 200px;
  background: none;
  opacity: 0;
  height: 30px;
  margin: 0;
}

option {
  background: rgba(0, 170, 170);
  color: #fff;
  font-family: "Roboto";

  &:hover {
    background: rgba(0, 170, 170);
  }
}
</style>
