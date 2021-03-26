<template>
  <div class="window message">
    <div v-if="commander.message">
      {{ t("components.message.from") }} : {{ commander.message.from }}
    </div>
    <div v-if="commander.message">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import commanderStore from "@/store/main/commander";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "message",
  setup() {
    const commander = computed(() => commanderStore.state);
    const { t } = useI18n();
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
      t,
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
