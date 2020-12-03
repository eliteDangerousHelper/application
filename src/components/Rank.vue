<template>
  <el-card :body-style="{ padding: '0px' }" class="rank">
    <h1>{{ state.name }}</h1>
    <div class="test">
      <img :src="icon" class="image hidden-md-only" />
      <div class="info">
        <el-progress width="70" type="dashboard" :text-inside="true" :stroke-width="12" :percentage="state.percent"></el-progress>
        {{ rankName }}
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import {
  combatRanks,
  cqcRanks,
  empireRanks,
  explorationRanks,
  federationRanks,
  tradeRanks
} from "@/utils/idConverter";
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

    const rankName = ref("");
    switch (props.state?.name) {
      case "Combat":
        rankName.value = combatRanks(props.state.level);
        break;
      case "Trade":
        rankName.value = tradeRanks(props.state.level);
        break;
      case "Explore":
        rankName.value = explorationRanks(props.state.level);
        break;
      case "Empire":
        rankName.value = empireRanks(props.state.level);
        break;
      case "Federation":
        rankName.value = federationRanks(props.state.level);
        break;
      case "CQC":
        rankName.value = cqcRanks(props.state.level);
        break;
    }

    return {
      icon,
      rankName
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
      flex-direction: column;

      .test {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      img {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
}
</style>
