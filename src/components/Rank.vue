<template>
  <el-card :body-style="{ padding: '0px' }" class="rank">
    <img :src="icon" class="image" />
    <div class="info">
      <h1>{{ state.name }}</h1>
      <p>
        Rang: {{ state.level }}<br />
        Avancement: {{ state.percent }}
      </p>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Rank } from "../store/ranks";

export default defineComponent({
  name: "Rank",
  props: {
    state: {
      type: Object as PropType<Rank>,
      require: true
    }
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const icon = ref(require(`../assets/ranks/${props.state?.icon}.png`));
    return {
      icon
    };
  }
});
</script>

<style lang="scss">
.rank {
  .el-card {
    .el-card__body {
      display: flex;
      align-items: center;
      justify-content: space-around;

      img {
        margin-right: 20px;
        width: 30%;
      }
    }
  }
}

.image {
  // width: 100%;
  display: block;
}

.info {
  padding: 14px;
}
</style>
