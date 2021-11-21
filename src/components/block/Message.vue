<template>
  <div class="window message">
    <div v-if="commander.message">
      De : {{ commander.message.from }}
    </div>
    <div v-if="commander.message">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import commanderStore from "@/store/commander";

export default defineComponent({
  name: "message",
  setup() {
    const commander = computed(() => commanderStore.state);
    const message = computed(() => {
      if (!commanderStore.state.message) {
        return "";
      }

      if (commanderStore.state.message?.message.length > 78) {
        return commanderStore.state.message?.message.slice(0, 75) + "...";
      }

      return commanderStore.state.message?.message;
    });

    return {
      commander,
      message
    };
  }
});
</script>

<style lang="scss" scoped>
.message {
  grid-area: message;
}
.item {
  margin-right: 40px;
  margin-top: 15px;
}
</style>
