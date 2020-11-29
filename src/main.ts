import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import 'normalize.css';

createApp(App)
  .use(store.original)
  .mount("#app");
