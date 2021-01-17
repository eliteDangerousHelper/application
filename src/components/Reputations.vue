<template>
  <Reputation
    v-for="(reputation, index) in commander.reputation"
    :key="reputation"
    :type="index"
    :reputation="reputation"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import commanderStore from "@/store/main/commander";
import Reputation from "./Reputation.vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Reputations",
  setup() {
    const commander = computed(() => commanderStore.state);
    const { t } = useI18n();
    return {
      commander,
      t
    };
  },
  components: {
    Reputation
  }
});
</script>
