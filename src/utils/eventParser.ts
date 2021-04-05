import { EventED } from "@/interfaces/events/base";
import * as startup from "./events/startup";
import * as travel from "./events/travel";
import * as stationService from "./events/stationService";
import { ipcRenderer } from "electron";

const eventFunction: { [name: string]: Function } = {
  FileHeader: startup.fileheader,
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
};

const ignoredEvent: string[] = [
  "Music",
  "SendText",
  "Friends"
]

export const parse = (event: EventED) => {
  if (eventFunction[event.event] !== undefined) {
    eventFunction[event.event](event);
  } else if (ignoredEvent.indexOf(event.event) !== -1) {
    ipcRenderer.emit("unparse-event", event);
  }
};

export default parse;
