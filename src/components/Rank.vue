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
      :percentage="percent"
    ></el-progress>
    <div class="info">
      {{ rankName }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import { Rank } from "../store/main/ranks";

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
    const percent = ref(props.state?.percent);

    const getRankName = (
      name: string | undefined,
      level: number | undefined
    ): string => {
      switch (name) {
        case "Combat":
          return t("ranks.combat." + level);
        case "Trade":
          return t("ranks.trade." + level);
        case "Explore":
          return t("ranks.explore." + level);
        case "Empire":
          return t("ranks.empire." + level);
        case "Federation":
          return t("ranks.federation." + level);
        case "CQC":
          return t("ranks.cqc." + level);
        default:
          return "";
      }
    };

    watch(props, () => {
      rankName.value = getRankName(props.state?.name, props.state?.level);
      percent.value = props.state?.percent;
      console.log(props.state?.percent);
      
    });

    rankName.value = getRankName(props.state?.name, props.state?.level);

    return {
      icon,
      rankName,
      percent,
      name
    };
  }
});
</script>

<style lang="scss">
.rank {
  background-image: url("../assets/ui/rounded1.png");
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
