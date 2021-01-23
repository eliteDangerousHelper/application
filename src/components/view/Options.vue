<template>
  <div>
    <div class="selectbox">
      <span>{{ actualLang }}</span>
      <select class="selectstyled" v-model="lang" placeholder="Select">
        <option
          v-for="item in LOCALES"
          :key="item.value"
          :label="item.caption"
          :value="item.value"
        >
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { LOCALES } from "@/i18n/locales";
import optionsStore from "@/store/main/options";

export default defineComponent({
  name: "Options",
  setup() {
    const lang = ref(
      LOCALES.filter(val => val.value == optionsStore.state.lang)[0].value
    );

    const actualLang = computed(() => LOCALES.filter(val => val.value == optionsStore.state.lang)[0].caption);

    watch(lang, () => {
      optionsStore.state.lang = lang.value;
    });

    return {
      lang,
      LOCALES,
      actualLang
    };
  }
});
</script>

<style lang="scss" scoped>
.selectbox {
  width: 200px;
  height: 30px;
  background: none;
  box-shadow: inset 0 0 1em rgba(0, 170, 170, 0.5),
    0 0 1em rgba(0, 170, 170, 0.5);
  border: #0dd solid 2px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -15px;
  margin-left: -100px;

  &:hover {
    background-color: #0dd;
    box-shadow: inset 0 0 0 rgba(0, 170, 170, 0.5),
      0 0 1.5em rgba(0, 170, 170, 0.7);
  }
}

.selectbox::after {
  font-family: 'Roboto';
  content: 'v';
  display: block;
  position: absolute;
  right: 20px;
  font-size: 16px;
  top: 7px;
  color:#FFF;
}
.selectbox span {
  position: absolute;
  top: 6px;
  left: 10px;
  font-family: 'Roboto';
  font-size: 16px;
  color:#FFF;
  font-weight:300;
}
select {
  width: 200px;
  background: none;
  opacity: 0;
  height: 30px;
  margin: 0;
}

option {
  background: rgba(0, 170, 170);
  color: #FFF;
  font-family: 'Roboto';

  &:hover {
    background: rgba(0, 170, 170);
  }
}
</style>
