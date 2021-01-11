<template>
  <div class="rank">
    <el-image
      :src="icon"
      class="image hidden-md-only"
      fit="contain"
      :title="name"
    />
    <el-progress
      width="30"
      type="circle"
      class="progress"
      color="rgb(0,168,194)"
      :text-inside="true"
      :stroke-width="6"
      :percentage="state.percent"
    ></el-progress>
    <div class="info">
      {{ rankName }}
    </div>
  </div>
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
  background-image: url(/img/rounded1.cdc7c62d.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  position: relative;
  color: rgb(0, 168, 194);

  .image {
    position: absolute;
    display: inline-block;
    overflow: hidden;
    top: 70px;
    left: 56px;
    width: 45px;
  }

  .progress {
    position: absolute;
    top: 15px;
    left: 29px;
  }

  .info {
    position: absolute;
    top: 48px;
    left: 35px;
    text-align: center;
    width: 80px;
    overflow: hidden;
  }
}
</style>
