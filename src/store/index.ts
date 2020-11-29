import { createDirectStore } from "direct-vuex";
import GameStore from "./game";

const { store, rootActionContext, moduleActionContext } = createDirectStore({
  modules: {
    GameStore
  }
});

export default store;

export { rootActionContext, moduleActionContext };

export type AppStore = typeof store;

declare module "vuex" {
  interface Store<S> {
    direct: AppStore
  }
}
