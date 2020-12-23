<template>
  <el-card :body-style="{ padding: '0px' }" class="rank">
    <el-image
      :src="icon"
      class="image hidden-md-only"
      fit="contain"
      :title="name"
    />
    <div class="info">
      <el-progress
        width="40"
        type="dashboard"
        :text-inside="true"
        :stroke-width="6"
        :percentage="state.percent"
      ></el-progress>
      {{ rankName }}
    </div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { useI18n } from "vue-i18n";
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
    const name = computed(() => props.state?.name);
    const { t } = useI18n();

    const rankName = ref("");
    switch (props.state?.name) {
      case "Combat":
        rankName.value = t("ranks.combat." + props.state.level);
        break;
      case "Trade":
        rankName.value = t("ranks.trade." + props.state.level);
        break;
      case "Explore":
        rankName.value = t("ranks.explore." + props.state.level);
        break;
      case "Empire":
        rankName.value = t("ranks.empire." + props.state.level);
        break;
      case "Federation":
        rankName.value = t("ranks.federation." + props.state.level);
        break;
      case "CQC":
        rankName.value = t("ranks.cqc." + props.state.level);
        break;
    }

    return {
      icon,
      rankName,
      name
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
    }
  }
}

.image {
  max-height: 70px;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px;
}
</style>
