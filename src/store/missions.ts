import { computed, reactive } from "vue";

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
  complete: []
});

const getActiveMissions = computed(() => state.active.sort((a, b) => a.expires - b.expires));
const getCompleteMissions = computed(() => state.complete.sort((a, b) => a.expires - b.expires));

export default { state, getActiveMissions, getCompleteMissions };
