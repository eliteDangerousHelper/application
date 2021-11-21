import { reactive } from "vue";

export interface AlertState {
  title: string;
  message: string;
}

const state: AlertState = reactive({
  title: "",
  message: ""
});

export default { state };
