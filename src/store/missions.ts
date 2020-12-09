import { reactive } from "vue";

interface Mission {
  id: number;
  name: string;
  passengerMission: boolean;
  expires: number;
}

export interface MissionsState {
  active: Mission[];
  failed: Mission[];
  complete: Mission[];
}

const state: MissionsState = reactive({
  active: [],
  failed: [],
  complete: [],
});

export default { state };
