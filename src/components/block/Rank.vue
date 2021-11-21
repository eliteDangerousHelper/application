<template>
  <div class="rank">
    <div class="image">
      <img :src="icon" :title="name" />
    </div>
    <CircleProgress
      width="115"
      class="progress"
      color="rgb(0,168,194)"
      :stroke-width="10"
      :percentage="percent"
    ></CircleProgress>
    <div class="info">
      {{ rankName }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import { Rank } from "@/store/ranks";
import CircleProgress from "@/components/ui/CircleProgress.vue";
import ranksName from "@/Enums/ranks";

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
    const icon = ref(require(`@/assets/ranks/${props.state?.icon}.png`));
    const name = computed(() => props.state?.name);
    const rankName = ref("");
    const percent = ref(props.state?.percent);

    const getRankName = (
      name: string | undefined,
      level: number | undefined
    ): string => {
      if (level !== undefined) {
        switch (name) {
          case "Combat":
            return ranksName.combat[level];
          case "Trade":
            return ranksName.trade[level];
          case "Explore":
            return ranksName.explore[level];
          case "Empire":
            return ranksName.empire[level];
          case "Federation":
            return ranksName.federation[level];
          case "CQC":
            return ranksName.cqc[level];
          default:
            return "";
        }
      }
      
      return "";
    };

    watch(props, () => {
      rankName.value = getRankName(props.state?.name, props.state?.level);
      percent.value = props.state?.percent;
    });

    rankName.value = getRankName(props.state?.name, props.state?.level);

    return {
      icon,
      rankName,
      percent,
      name
    };
  },
  components: {
    CircleProgress
  }
});
</script>

<style lang="scss">
.rank {
  background-image: url("../../assets/ui/rounded1.png");
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

    img {
      width: 100%;
      height: 100%;
    }
  }

  .progress {
    position: absolute;
    top: 16px;
    left: 18px;
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
