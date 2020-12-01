<template>
  <el-row :gutter="20">
    <el-col :span="4" v-for="(rank, index) in ranks" :key="rank.name">
      <Rank :type="index" :state="rank" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Rank from "./Rank.vue";
import store from "../store/ranks";

export default defineComponent({
  name: "Ranks",
  setup() {
    const ranks = computed(() => store.state);
    return {
      ranks
    };
  },
  components: {
    Rank
  }
});
</script>

<style scoped>
.ranks {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
</style>
