import { createApp } from "vue";
import App from "./App.vue";
import Element from "./plugins/element";

import "normalize.css";

createApp(App)
.use(Element.ElementPlus, Element.options)
.mount("#app");
