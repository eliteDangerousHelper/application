import { EventED } from "@/interfaces/events/base";
import * as startup from "./events/startup";
import * as travel from "./events/travel";
import * as stationService from "./events/stationService";

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
};

export const parse = (event: EventED) => {
  if (eventFunction[event.event] !== undefined) {
    eventFunction[event.event](event);
  }
};

export default parse;
