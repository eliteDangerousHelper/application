import { Commander, Engineer, EngineerProgress, Heading, LoadGame, Missions, Progress, Rank, Reputation, Shutdown, SquadronStartup } from '@/interfaces/events/startup';
import rankStore from "@/store/main/ranks";
import gameStore from "@/store/main/game";
import commanderStore from "@/store/main/commander";
import shipStore from "@/store/main/ship";
import missionsStore from "@/store/main/missions";

export const fileheader = (event: Heading) => {
  console.log('fileheader :', event);
}

export const commander = (event: Commander) => {
  commanderStore.state.name = event.Name
  commanderStore.state.fid = event.FID
}

export const loadGame = (event: LoadGame) => {
  commanderStore.state.fid = event.FID;
  commanderStore.state.name = event.Commander;
  commanderStore.state.credit = event.Credits;
  commanderStore.state.loan = event.Loan;
  
  gameStore.state.horizons = event.Horizons;
  gameStore.state.group = event.Group === "" ? undefined : event.Group;
  gameStore.state.mode = event.GameMode;
  gameStore.state.launch = true;

  shipStore.state.name = event.ShipName;
  shipStore.state.id = event.ShipID;
  shipStore.state.type = event.Ship_Localised;
  shipStore.state.indent = event.ShipIdent;
  shipStore.state.fuel.capacity = event.FuelCapacity;
  shipStore.state.fuel.level = event.FuelLevel;
}

export const reputation = (event: Reputation) => {
  commanderStore.state.reputation.empire = event.Empire
  commanderStore.state.reputation.federation = event.Federation
}

export const missions = (event: Missions) => {
  event.Active.forEach(mission => {
    missionsStore.state.active.push({
      id: mission.MissionID,
      name: mission.Name,
      expires: mission.Expires,
      passengerMission: mission.PassengerMission
    })
  })
  
  event.Complete.forEach(mission => {
    missionsStore.state.complete.push({
      id: mission.MissionID,
      name: mission.Name,
      expires: mission.Expires,
      passengerMission: mission.PassengerMission
    })
  })

  event.Failed.forEach(mission => {
    missionsStore.state.failed.push({
      id: mission.MissionID,
      name: mission.Name,
      expires: mission.Expires,
      passengerMission: mission.PassengerMission
    })
  })
}

export const engineerProgress = (event: EngineerProgress) => {
  event.Engineers.forEach((enginner: Engineer) => {
    const engExist = commanderStore.state.engineers.filter((eng) => eng.id === enginner.EngineerID).length != 0;

    if (engExist) {
      commanderStore.state.engineers.filter((eng) => eng.id === enginner.EngineerID)[0].name = enginner.Engineer;
      commanderStore.state.engineers.filter((eng) => eng.id === enginner.EngineerID)[0].progress = enginner.Progress;
    } else {
      commanderStore.state.engineers.push({
        name: enginner.Engineer,
        id: enginner.EngineerID,
        progress: enginner.Progress
      })
    }
  })
}

export const squadronStartup = (event: SquadronStartup) => {
  commanderStore.state.squadron = {
    name: event.SquadronName,
    rank: event.CurrentRank,
  }
}

export const shutdown = (event: Shutdown) => {
  gameStore.state.launch = false
}

export const progress = (event: Progress) => {
  console.log(event);
  
  rankStore.state.CQC.percent = event.CQC
  rankStore.state.Combat.percent = event.Combat
  rankStore.state.Empire.percent = event.Empire
  rankStore.state.Explore.percent = event.Explore
  rankStore.state.Federation.percent = event.Federation
  rankStore.state.Trade.percent = event.Trade
}

export const rank = (event: Rank) => {
  rankStore.state.CQC.level = event.CQC
  rankStore.state.Combat.level = event.Combat
  rankStore.state.Empire.level = event.Empire
  rankStore.state.Explore.level = event.Explore
  rankStore.state.Federation.level = event.Federation
  rankStore.state.Trade.level = event.Trade
}