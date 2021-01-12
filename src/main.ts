import { createApp, watch } from "vue";
import App from "./App.vue";
import Element from "./plugins/element";
import { messages, defaultLocale } from "@/i18n";
import optionsStore from "./store/options";

import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
});

watch(optionsStore.state, () => {
  i18n.global.locale.value = optionsStore.state.lang;
})

import "normalize.css";

createApp(App)
.use(Element.ElementPlus, Element.options)
.use(i18n)
.mount("#app");
