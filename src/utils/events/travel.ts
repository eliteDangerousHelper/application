import { Docked, FSDJump, Location } from "@/interfaces/events/travel";
import systemStore from "@/store/main/system";

export const location = (event: Location) => {
  systemStore.state.name = event.StarSystem;
  systemStore.state.population = event.Population;
  systemStore.state.security = event.SystemSecurity_Localised;
  systemStore.state.economy = event.SystemEconomy_Localised;
  systemStore.state.allegiance =
    event.SystemAllegiance === "" ? undefined : event.SystemAllegiance;

  if (event.Docked) {
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
    systemStore.state.dockedStation = undefined;
  }
};

export const fsdJump = (event: FSDJump) => {
  systemStore.state.name = event.StarSystem;
  systemStore.state.allegiance =
    event.SystemAllegiance === "" ? undefined : event.SystemAllegiance;
  systemStore.state.dockedStation = undefined;
  systemStore.state.economy = event.SystemEconomy_Localised;
  systemStore.state.population = event.Population;
  systemStore.state.security = event.SystemSecondEconomy_Localised;
};

export const docked = (event: Docked) => {
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
