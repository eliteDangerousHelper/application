import { Cargo, Docked, FSDJump, Location, Undocked } from "@/interfaces/events/travel";
import systemStore from "@/store/main/system";
import gameStore from "@/store/main/game";
import marketStore from "@/store/main/market";
import ship from "@/store/main/ship";

export const location = (event: Location) => {
  systemStore.state.name = event.StarSystem;
  systemStore.state.population = event.Population;
  systemStore.state.security = event.SystemSecurity_Localised;
  systemStore.state.economy = event.SystemEconomy_Localised;
  systemStore.state.allegiance =
    event.SystemAllegiance === "" ? undefined : event.SystemAllegiance;

  if (event.Docked) {
    gameStore.state.gameMode = "Station";
    systemStore.state.dockedStation = {
      name: event.StationName,
      economy: event.StationEconomy_Localised,
      faction: {
        name: event.StationFaction.Name,
        factionState: event.StationFaction.FactionState
      },
      government: event.StationGovernment_Localised,
      services: event.StationServices,
      marketId: event.MarketID
    };
  } else {
    gameStore.state.gameMode = "Exploration";
    systemStore.state.dockedStation = undefined;
  }
};

export const fsdJump = (event: FSDJump) => {
  gameStore.state.gameMode = "Exploration";
  systemStore.state.name = event.StarSystem;
  systemStore.state.allegiance =
    event.SystemAllegiance === "" ? undefined : event.SystemAllegiance;
  systemStore.state.dockedStation = undefined;
  systemStore.state.economy = event.SystemEconomy_Localised;
  systemStore.state.population = event.Population;
  systemStore.state.security = event.SystemSecondEconomy_Localised;
};

export const docked = (event: Docked) => {
  gameStore.state.gameMode = "Station";
  systemStore.state.dockedStation = {
    name: event.StationName,
    type: event.StationType,
    economy: event.StationEconomy_Localised,
    faction: {
      name: event.StationFaction.Name,
      factionState: event.StationFaction.FactionState
    },
    government: event.StationGovernment_Localised,
    services: event.StationServices,
    marketId: event.MarketID
  };
};

export const undocked = (event: Undocked) => {
  gameStore.state.gameMode = "Exploration";
  marketStore.state.commodities = [];
  systemStore.state.dockedStation = undefined;
}

export const cargo = (event: Cargo) => {
  ship.state.cargo.used = event.Count
}
