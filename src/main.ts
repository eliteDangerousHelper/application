import { createApp } from "vue";
import App from "./App.vue";
import Element from "./plugins/element";
import { messages, defaultLocale } from "@/i18n";

import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages
});

import "normalize.css";

createApp(App)
.use(Element.ElementPlus, Element.options)
.use(i18n)
.mount("#app");
