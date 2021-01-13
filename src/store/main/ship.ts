import { reactive } from "vue";

export interface ShipState {
  name: string;
  id: number;
  type: string;
  indent: string;
  fuel: {
    level: number;
    capacity: number;
  };
}

const state: ShipState = reactive({
  name: "",
  id: 0,
  type: "",
  indent: "",
  fuel: {
    level: 0,
    capacity: 0
  }
});

export default { state };
