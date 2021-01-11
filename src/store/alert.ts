import { reactive } from "vue";

export interface AlertState {
  title: string;
  message: string;
}

const state: AlertState = reactive({
  title: "Docked",
  message: "You're docked at Ross Station"
});

export default { state };
