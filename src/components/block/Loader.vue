<template>
  <div class="loader">
    <img alt="Loader" src="@/assets/loader.gif" />
    <div class="text-loader">En attente du lancement du jeu</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.text-loader {
  color: rgba(255, 255, 255, 1);
  background: none;
  border-radius: 0;
  padding: 5px 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  font-size: 0.7em;
  transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;
  margin: 5px;
  box-shadow: inset 0 0 1em rgba(0, 170, 170, 0.5),
    0 0 1em rgba(0, 170, 170, 0.5);
  border: #0dd solid 2px;

  &:hover {
    background-color: #0dd;
    box-shadow: inset 0 0 0 rgba(0, 170, 170, 0.5),
      0 0 1.5em rgba(0, 170, 170, 0.7);
  }
}
.loader {
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

img {
  margin-bottom: 30px;
}
</style>
