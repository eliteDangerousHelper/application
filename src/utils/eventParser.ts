import { EventED } from "@/types/events/base";
import * as startup from "@/events/startup";
import * as travel from "@/events/travel";
import * as stationService from "@/events/stationService";
import * as other from "@/events/other";

const { ipcRenderer } = window.require("electron");

const eventFunction: { [name: string]: (event: any) => void } = {
  Fileheader: startup.fileheader,
  Progress: startup.progress,
  Shutdown: startup.shutdown,
  Rank: startup.rank,
  LoadGame: startup.loadGame,
  Commander: startup.commander,
  Reputation: startup.reputation,
  EngineerProgress: startup.engineerProgress,
  SquadronStartup: startup.squadronStartup,
  Location: travel.location,
  FSDJump: travel.fsdJump,
  Docked: travel.docked,
  Undocked: travel.undocked,
  Market: stationService.market,
  Cargo: travel.cargo,
  Loadout: startup.loadout,
  Missions: startup.missions,
  MissionAccepted: stationService.missionAccepted,
  MissionCompleted: stationService.missionCompleted,
  MissionAbandoned: stationService.missionAbandoned,
  MissionFailed: stationService.missionFailed,
  ApproachSettlement: other.approachSettlement,
  ReceiveText: other.receiveText,
  StartJump: travel.startJump,
  FuelScoop: travel.fuelScoop,
  DockingRequested: travel.dockingRequested
};

const ignoredEvent: string[] = [
  "Music",
  "SendText",
  "Friends",
  "FSSSignalDiscovered"
]

export const parse = (event: EventED) => {
  if (eventFunction[event.event] !== undefined) {
    eventFunction[event.event](event);
  } else if (ignoredEvent.indexOf(event.event) === -1) {
    console.error("unparse-event", event);
    ipcRenderer.send("unparse-event", event);
  }
};

export default parse;
