<template>
  <div class="reputations">
    <Reputation
      v-for="(reputation, index) in commander.reputation"
      :key="reputation"
      :type="index"
      :reputation="reputation"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import commanderStore from "@/store/commander";
import Reputation from "./Reputation.vue";

export default defineComponent({
  name: "Reputations",
  setup() {
    const commander = computed(() => commanderStore.state);
    return {
      commander,
    };
  },
  components: {
    Reputation
  }
});
</script>

<style lang="scss" scoped>
.reputations {
  grid-area: reputations;
}
</style>
