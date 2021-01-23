<template>
  <svg :width="width" :height="width">
    <path
      :stroke="color"
      :stroke-width="strokeWidth"
      fill="none"
      id="arc"
      :d="d"
    ></path>
  </svg>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "CircleProgress",
  props: {
    width: {
      type: Number,
      require: true
    },
    color: {
      type: String,
      require: true
    },
    strokeWidth: {
      type: Number,
      require: true
    },
    percentage: {
      type: Number,
      require: true
    }
  },
  setup(props) {
    const startAngle = 270;
    let endAngle = startAngle + props.percentage! * 3.6;
    const radius = (props.width! - props.strokeWidth! * 2) / 2;
    const center = props.width! / 2;
    const d = ref("");

    const polarToCartesian = (angleInDegrees: number) => {
      const angleInRadians = (angleInDegrees * Math.PI) / 180.0;

      return {
        x: center + radius * Math.cos(angleInRadians),
        y: center + radius * Math.sin(angleInRadians)
      };
    };

    const describeArc = () => {
      //Petite correction quand end = start +360 car les deux points sont confondus
      if (endAngle == startAngle + 360) {
        endAngle -= 0.1;
      }
      //calcul les coordonnées du point de départ et du point final
      const start = polarToCartesian(startAngle);
      const end = polarToCartesian(endAngle);

      //si le secteur angulaire est supérieure à 180° large-arc-flag = 1
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

      // Le plus compliqué, car il faut décrire le chemin avec l'attibut d
      // M start.x start.y les coordonnées du point de départ
      // A pour arc
      // radius radius  sont les rayons respectifs en abcisse et en ordonnée
      // 0 la rotation de l'axe des abcisse
      // largeArcFlag large-arc-flag  on choisit  le grand arc
      // 1 sweep-flag le sens de parcours dans le sens des aiguilles d'une montre
      // end.x end.y les coordonnées de mon point final
      const dcalc = [
        "M",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        largeArcFlag,
        1,
        end.x,
        end.y
      ];

      d.value = dcalc.join(" ");
    };

    onMounted(describeArc);
    watch(props, () => {
      describeArc();
    });

    return {
      d
    };
  }
});
</script>
