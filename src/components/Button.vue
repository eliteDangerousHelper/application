<template>
  <div class="pure-button fuller-button blue"><slot></slot></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.fuller-button {
  color: rgba(255, 255, 255, 1);
  background: none;
  border-radius: 0;
  padding: 0.6em 0.9em;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.7em;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
  margin: 1em;
  cursor: pointer;

  &.blue {
    box-shadow: inset 0 0 1em rgba(0, 170, 170, 0.5),
      0 0 1em rgba(0, 170, 170, 0.5);
    border: #0dd solid 2px;
  }

  &.blue:hover {
    background-color: #0dd;
    box-shadow: inset 0 0 0 rgba(0, 170, 170, 0.5),
      0 0 1.5em rgba(0, 170, 170, 0.7);
  }

  &.red {
    box-shadow: inset 0 0 1em rgba(251, 81, 81, 0.4),
      0 0 1em rgba(251, 81, 81, 0.4);
    border: #fb5454 solid 2px;
  }

  &.red:hover {
    background-color: #fb5454;
    box-shadow: inset 0 0 0 rgba(251, 81, 81, 0.4),
      0 0 1.5em rgba(251, 81, 81, 0.6);
  }

  &.white {
    box-shadow: inset 0 0 0.8em rgba(255, 255, 255, 0.3),
      0 0 0.8em rgba(255, 255, 255, 0.3);
    border: #fff solid 2px;
  }

  &.white:hover {
    color: rgba(0, 0, 0, 0.8);
    background-color: #fff;
    box-shadow: inset 0 0 0 rgba(255, 255, 255, 0.3),
      0 0 1.2em rgba(255, 255, 255, 0.5);
  }
}
</style>
