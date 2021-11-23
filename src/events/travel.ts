import { Cargo, Docked, DockingRequested, FSDJump, FSDTarget, FuelScoop, Location, StartJump, Undocked } from "@/types/events/travel";
import systemStore from "@/store/system";
import gameStore from "@/store/game";
import marketStore from "@/store/market";
import ship from "@/store/ship";

export const location = (event: Location) => {
  systemStore.state.actual.name = event.StarSystem;
  systemStore.state.actual.population = event.Population;
  systemStore.state.actual.security = event.SystemSecurity_Localised;
  systemStore.state.actual.economy = event.SystemEconomy_Localised;
  systemStore.state.actual.allegiance =
    event.SystemAllegiance === "" ? undefined : event.SystemAllegiance;

  if (event.Docked) {
    gameStore.state.gameMode = "Station";
    systemStore.state.actual.dockedStation = {
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
    systemStore.state.actual.dockedStation = undefined;
  }
};

export const fsdJump = (event: FSDJump) => {
  gameStore.state.gameMode = "Exploration";
  systemStore.state.actual.name = event.StarSystem;
  systemStore.state.actual.allegiance =
    event.SystemAllegiance === "" ? undefined : event.SystemAllegiance;
  systemStore.state.actual.dockedStation = undefined;
  systemStore.state.actual.economy = event.SystemEconomy_Localised;
  systemStore.state.actual.population = event.Population;
  systemStore.state.actual.security = event.SystemSecondEconomy_Localised;
};

export const fsdTravel = (event: FSDTarget) => {
  systemStore.state.destination = {
    name: event.Name,
    starClass: event.StarClass,
    remaining: event.RemainingJumpsInRoute,
    address: event.SystemAddress
  }
}

export const docked = (event: Docked) => {
  gameStore.state.gameMode = "Station";
  systemStore.state.actual.dockedStation = {
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

export const dockingRequested = (event: DockingRequested) => {
  gameStore.state.gameMode = "Station";
  systemStore.state.actual.dockedStation = {
    name: event.StationName,
    type: event.StationType,
    marketId: event.MarketID
  };
}

export const undocked = (event: Undocked) => {
  gameStore.state.gameMode = "Exploration";
  marketStore.state.commodities = [];
  systemStore.state.actual.dockedStation = undefined;
}

export const cargo = (event: Cargo) => {
  ship.state.cargo.used = event.Count
}

export const fuelScoop = (event: FuelScoop) => {
  ship.state.fuel.level = event.Total
}

export const startJump = (event: StartJump) => {
  if (event.JumpType === "Hyperspace") {
    if (!systemStore.state.destination) {
      systemStore.state.destination = {
        name: event.StarSystem,
        starClass: event.StarClass,
        address: event.SystemAddress
      }
    } else {
      systemStore.state.destination.name = event.StarSystem;
      systemStore.state.destination.starClass = event.StarClass;
      systemStore.state.destination.address = event.SystemAddress;
    }
  }
}