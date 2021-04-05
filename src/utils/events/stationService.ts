import { MissionAccepted, MissionCompleted, MissionAbandoned, MissionFailed } from "@/interfaces/events/stationServices";
import MissionsStore from "@/store/main/missions";

const { ipcRenderer } = window.require("electron");

export const market = () => {
  ipcRenderer.send("get-commodities");
};


export const missionAccepted = (event: MissionAccepted) => {
  MissionsStore.state.active.push({
    name: event.Name,
    expires: new Date(event.Expiry).getUTCSeconds() - Date.now(),
    id: event.MissionID,
    passengerMission: false
  })
}

export const missionCompleted = (event: MissionCompleted) => {
  const mission = MissionsStore.state.active.find((mission) => mission.id == event.MissionID)

  if (mission) {
    MissionsStore.state.complete.push(mission);
    MissionsStore.state.active = MissionsStore.state.active.filter((mission) => mission.id !== event.MissionID)
  }
}

export const missionAbandoned = (event: MissionAbandoned) => {
  const mission = MissionsStore.state.active.find((mission) => mission.id == event.MissionID)

  if (mission) {
    MissionsStore.state.active = MissionsStore.state.active.filter((mission) => mission.id !== event.MissionID)
  }
}

export const missionFailed = (event: MissionFailed) => {
  const mission = MissionsStore.state.active.find((mission) => mission.id == event.MissionID)

  if (mission) {
    MissionsStore.state.failed.push(mission);
    MissionsStore.state.active = MissionsStore.state.active.filter((mission) => mission.id !== event.MissionID)
  }
}
