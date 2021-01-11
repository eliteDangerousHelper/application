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
import { defaultLocale } from "../i18n";
import { LOCALES } from "../i18n/locales";
import { ElSelect, ElOption } from "element-plus";
import { i18n } from "../main";

export default defineComponent({
  name: "Options",
  setup() {
    const lang = ref(
      LOCALES.filter(val => val.value == defaultLocale)[0].value
    );

    watch(lang, () => {
      console.log(lang.value);
      i18n.global.locale.value = lang.value;
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
