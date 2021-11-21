<template>
  <div class="window commander">
    <div>Crédit: {{ credit }}</div>
    <div>Emprunt: {{ loan }}</div>
    <div v-if="commander.squadron">
      Squadron:
      {{ commander.squadron.name }} (rang: {{ commander.squadron.rank }})
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import commanderStore from "@/store/commander";

export default defineComponent({
  name: "Commander",
  setup() {
    const commander = computed(() => commanderStore.state);
    const credit = computed(() =>
      new Intl.NumberFormat().format(commanderStore.state.credit)
    );
    const loan = computed(() =>
      new Intl.NumberFormat().format(commanderStore.state.loan)
    );

    return {
      commander,
      credit,
      loan
    };
  }
});
</script>

<style lang="scss" scoped>
.commander {
  grid-area: commander;
}
.item {
  margin-right: 40px;
  margin-top: 15px;
}
</style>
