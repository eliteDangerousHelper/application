<template>
  <div class="reputation">
    <el-image
      :src="icon"
      class="image hidden-md-only"
      fit="contain"
      :title="name"
    />
    <div class="info">
      {{ rankName }}
    </div>
    <el-progress
      :percentage="percentage"
      :color="customColors"
      :show-text="false"
    ></el-progress>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { computed, defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Reputation",
  props: {
    reputation: {
      type: Number,
      require: true
    },
    type: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const ucFirst = (str: string | undefined) => {
      if (!str) return str;

      return str[0].toUpperCase() + str.slice(1);
    };
    const iconName = ref(ucFirst(props.type));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const icon = ref(require(`../assets/ranks/${iconName.value}.png`));
    const { t } = useI18n();
    const percentage = computed(() => (props.reputation! + 100) / 2);

    const customColors: { color: string; percentage: number }[] = [
      { color: "#f56c6c", percentage: 5 },
      { color: "#e6a23c", percentage: 32.5 },
      { color: "#5cb87a", percentage: 52 },
      { color: "rgb(0, 168, 194)", percentage: 67.5 },
      { color: "#1989fa", percentage: 95 }
    ];

    const rankName = computed(() => {
      if (props.reputation! <= -90) {
        return t("reputation.hostile");
      } else if (props.reputation! <= -35) {
        return t("reputation.unfriendly");
      } else if (props.reputation! <= 4) {
        return t("reputation.neutral");
      } else if (props.reputation! <= 35) {
        return t("reputation.cordial");
      } else if (props.reputation! <= 90) {
        return t("reputation.friendly");
      } else {
        return t("reputation.allied");
      }
    });

    return {
      icon,
      rankName,
      name,
      percentage,
      customColors
    };
  }
});
</script>

<style lang="scss" scoped>
.reputation {
  background-image: url("../assets/ui/bar4.png");
  background-size: cover;
  width: 467px;
  height: 110px;
  position: relative;

  .image {
    position: absolute;
    top: 35px;
    left: 110px;
    width: 50px;
  }

  .el-progress {
    position: absolute;
    top: 54px;
    left: 170px;
    right: 35px;
  }
}
</style>
