<template>
  <div class="loader">
    <img alt="Loader" src="../assets/loader.gif" />
    <el-tag type="info">En attente du lancement du jeu</el-tag>
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
