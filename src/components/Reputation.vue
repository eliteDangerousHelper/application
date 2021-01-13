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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
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
    }
    const iconName = ref(ucFirst(props.type));
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const icon = ref(require(`../assets/ranks/${iconName.value}.png`));
    const { t } = useI18n();

    const rankName = ref("");
    switch (props.type) {
      case "Empire":
        rankName.value = t("ranks.empire." + props.reputation);
        break;
      case "Federation":
        rankName.value = t("ranks.federation." + props.reputation);
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
