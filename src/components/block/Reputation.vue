<template>
  <div class="reputation">
    <div class="image">
      <img :src="icon" :title="iconName" />
    </div>
    <div class="info">
      {{ rankName }}
    </div>
    <div class="meter">
      <span :style="style" :class="reputationRank"></span>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { computed, defineComponent, ref } from "vue";

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
    const icon = ref(require(`@/assets/ranks/${iconName.value}.png`));
    const percentage = computed(() => (props.reputation! + 100) / 2);
    const style = computed(() => "width: " + percentage.value + "%");

    const rankName = computed(() => {
      if (props.reputation! <= -90) {
        return "Hostile";
      } else if (props.reputation! <= -35) {
        return "Inamical";
      } else if (props.reputation! <= 4) {
        return "Neutre";
      } else if (props.reputation! <= 35) {
        return "Cordial";
      } else if (props.reputation! <= 90) {
        return "Amical";
      } else {
        return "Allié";
      }
    });

    const reputationRank = computed(() => {
      if (props.reputation! <= -90) {
        return "hostile";
      } else if (props.reputation! <= -35) {
        return "unfriendly";
      } else if (props.reputation! <= 4) {
        return "neutral";
      } else if (props.reputation! <= 35) {
        return "cordial";
      } else if (props.reputation! <= 90) {
        return "friendly";
      } else {
        return "allied";
      }
    });

    return {
      icon,
      rankName,
      iconName,
      percentage,
      style,
      reputationRank
    };
  }
});
</script>

<style lang="scss" scoped>
.reputation {
  background-image: url("../../assets/ui/bar4.png");
  background-size: cover;
  width: 467px;
  height: 110px;
  position: relative;
  z-index: 20;

  .image {
    position: absolute;
    top: 35px;
    left: 110px;
    width: 50px;
    object-fit: contain;
    display: inline-block;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .meter {
    position: absolute;
    top: 42px;
    left: 164px;
    right: 35px;
    height: 10px;
    border-radius: 25px;
    padding: 10px;

    span {
      display: block;
      height: 100%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
        inset 0 -2px 6px rgba(0, 0, 0, 0.4);
      position: relative;
      overflow: hidden;

      &.hostile {
        background-color: #f56c6c;
        background-image: linear-gradient(
          center bottom,
          #f56c6c 37%,
          #c95757 69%
        );
      }

      &.unfriendly {
        background-color: #e6a23c;
        background-image: linear-gradient(
          center bottom,
          #e6a23c 37%,
          #b8812f 69%
        );
      }

      &.neutral {
        background-color: #5cb87a;
        background-image: linear-gradient(
          center bottom,
          #5cb87a 37%,
          #499462 69%
        );
      }

      &.cordial {
        background-color: #6cf5ee;
        background-image: linear-gradient(
          center bottom,
          #6cf5ee 37%,
          #54bdb7 69%
        );
      }

      &.friendly {
        background-color: rgb(0, 168, 194);
        background-image: linear-gradient(
          center bottom,
          rgb(0, 168, 194) 37%,
          rgb(0, 130, 150) 69%
        );
      }

      &.allied {
        background-color: #1989fa;
        background-image: linear-gradient(
          center bottom,
          #1989fa 37%,
          #166ec7 69%
        );
      }
    }
  }
}

// { color: "#f56c6c", percentage: 5 },
//       { color: "#e6a23c", percentage: 32.5 },
//       { color: "#5cb87a", percentage: 52 },
//       { color: "rgb(0, 168, 194)", percentage: 67.5 },
//       { color: "#1989fa", percentage: 95 }
</style>
