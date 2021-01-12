<template>
  <div>
    Langue actuelle : {{ lang.caption }}<br />
    <el-select v-model="lang" placeholder="Select">
      <el-option
        v-for="item in LOCALES"
        :key="item.value"
        :label="item.caption"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { LOCALES } from "../i18n/locales";
import { ElSelect, ElOption } from "element-plus";
import optionsStore from "../store/options";

export default defineComponent({
  name: "Options",
  setup() {
    const lang = ref(
      LOCALES.filter(val => val.value == optionsStore.state.lang)[0].value
    );

    watch(lang, () => {
      optionsStore.state.lang = lang.value;
    });

    return {
      lang,
      LOCALES
    };
  },
  components: {
    ElSelect,
    ElOption
  }
});
</script>
