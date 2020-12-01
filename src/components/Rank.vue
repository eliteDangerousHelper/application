<template>
  <div class="rank">
    <img :src="icon" />
    <div class="info">
      <h1>{{ state.name }}</h1>
      <p>
        Rang: {{ state.level }}<br>
        Avancement: {{ state.percent }}
        </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Rank } from "../store/ranks";

export default defineComponent({
  name: "Rank",
  props: {
    state: Object as PropType<Rank>
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const icon = ref(require(`../assets/ranks/${props.state!.icon}.png`));
    return {
      icon
    };
  }
});
</script>

<style lang="scss" scoped>
.rank {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 14%;
  background-color: rgba(41, 41, 41, 0.95);
  color: #eee;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  img {
    margin-right: 20px;
    width: 30%;
  }
}
</style>
