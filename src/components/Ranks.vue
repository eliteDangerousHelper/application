<template>
  <div class="ranks">
    <Rank
      v-for="rank in ranks"
      :key="rank.name"
      :type="index"
      :state="rank"
    ></Rank>
  </div>
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
    }
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
