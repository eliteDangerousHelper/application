<template>
  <el-card :body-style="{ padding: '0px' }" class="rank">
    <img :src="icon" class="image" />
    <div class="info">
      <h1>{{ state.name }}</h1>
      <p>
        <el-progress type="dashboard" :text-inside="true" :stroke-width="26" :percentage="state.percent"></el-progress>
        {{ rankName }}
      </p>
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
