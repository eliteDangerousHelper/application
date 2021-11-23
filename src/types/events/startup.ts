import { EventED } from "./base";

interface Mission {
  MissionID: number;
  Name: string;
  PassengerMission: boolean;
  Expires: number;
}

export interface Heading extends EventED {
  part: number;
  language: string;
  gameversion: string;
  build: string;
  Odyssey: boolean;
}

export interface Loadout extends EventED {
  "Ship": string;
  "ShipID": number;
  "ShipName": string;
  "ShipIdent": string;
  "HullValue": number;
  "ModulesValue": number;
  "HullHealth": number;
  "UnladenMass": number;
  "CargoCapacity": number;
  "MaxJumpRange": number;
  "FuelCapacity": {
    "Main": number;
    "Reserve": number;
  };
  "Rebuy": number;
  "Modules":{
    "Slot": string;
    "Item": string;
    "On": boolean;
    "Priority": number;
    "Health": number;
  }[]
}

export interface ReceiveText extends EventED {
  "From": string;
  "From_Localised"?: string;
  "Message": string;
  "Message_Localised"?: string;
  "Channel": string;
}

export interface Engineer extends EventED {
  Engineer: string;
  EngineerID: number;
  Progress: string;
}

export interface Missions extends EventED {
  Active: Mission[];
  Failed: Mission[];
  Complete: Mission[];
}

export type Shutdown = EventED;

export interface ClearSavedGame extends EventED {
  Name: string;
}

export interface NewCommander extends EventED {
  Name: string;
  Package: string;
}

export interface Commander extends EventED {
  FID: string;
  Name: string;
}

export interface Reputation extends EventED {
  Empire: number;
  Federation: number;
}

export interface EngineerProgress extends EventED {
  Engineers: Engineer[];
}

export interface SquadronStartup extends EventED {
  SquadronName: string;
  CurrentRank: number;
}

export interface LoadGame extends EventED {
  FID: string;
  Horizons: boolean;
  Ship_Localised: string;
  ShipName: string;
  ShipIdent: string;
  FuelLevel: number;
  FuelCapacity: number;
  Commander: string;
  Ship: string;
  ShipID: number;
  GameMode: string;
  Group: string;
  Credits: number;
  Loan: number;
}

export interface Progress extends EventED {
  Combat: number;
  Trade: number;
  Explore: number;
  Empire: number;
  Federation: number;
  CQC: number;
}

export interface Rank extends EventED {
  Combat: number;
  Trade: number;
  Explore: number;
  Empire: number;
  Federation: number;
  CQC: number;
}

export interface Statistics extends EventED {
  Bank_Account: {
    Current_Wealth: number;
    Insurance_Claims: number;
    Owned_Ship_Count: number;
    Premium_Stock_Bought: number;
    Spent_On_Ammo_Consumables: number;
    Spent_On_Fuel: number;
    Spent_On_Insurance: number;
    Spent_On_Outfitting: number;
    Spent_On_Premium_Stock: number;
    Spent_On_Repairs: number;
    Spent_On_Ships: number;
    Spent_On_Suit_Consumables: number;
    Spent_On_Suits: number;
    Spent_On_Weapons: number;
    Suits_Owned: number;
    Weapons_Owned: number;
  }
  Combat: {
    Assassination_Profits: number;
    Assassinations: number;
    Bounties_Claimed: number;
    Bounty_Hunting_Profit: number;
    Combat_Bond_Profits: number;
    Combat_Bonds: number;
    ConflictZone_High: number;
    ConflictZone_High_Wins: number;
    ConflictZone_Low: number;
    ConflictZone_Low_Wins: number;
    ConflictZone_Medium: number;
    ConflictZone_Medium_Wins: number;
    ConflictZone_Total: number;
    ConflictZone_Total_Wins: number;
    Dropships_Booked: number;
    Dropships_Cancelled: number;
    Dropships_Taken: number;
    Highest_Single_Reward: number;
    OnFoot_Combat_Bonds: number;
    OnFoot_Combat_Bonds_Profits: number;
    OnFoot_Scavs_Killed: number;
    OnFoot_Ships_Destroyed: number;
    OnFoot_Skimmers_Killed: number;
    OnFoot_Vehicles_Destroyed: number;
    Settlement_Conquered: number;
    Settlement_Defended: number;
    Skimmers_Killed: number;
  }
  Crafting: {
    Count_Of_Used_Engineers: number;
    Recipes_Generated: number;
    Recipes_Generated_Rank_1: number;
    Recipes_Generated_Rank_2: number;
    Recipes_Generated_Rank_3: number;
    Recipes_Generated_Rank_4: number;
    Recipes_Generated_Rank_5: number;
    Suit_Mods_Applied: number;
    Suit_Mods_Applied_Full: number;
    Suits_Upgraded: number;
    Suits_Upgraded_Full: number;
    Weapon_Mods_Applied: number;
    Weapon_Mods_Applied_Full: number;
    Weapons_Upgraded: number;
    Weapons_Upgraded_Full: number;
  }
  Crew: {
    NpcCrew_Died: number;
    NpcCrew_Fired: number;
    NpcCrew_Hired: number;
    NpcCrew_TotalWages: number;
  }
  Crime: {
    Bounties_Received: number;
    Citizens_Murdered: number;
    Data_Stolen: number;
    Fines: number;
    Goods_Stolen: number;
    Guards_Murdered: number;
    Highest_Bounty: number;
    Malware_Uploaded: number;
    Notoriety: number;
    Omnipol_Murdered: number;
    Production_Sabotage: number;
    Production_Theft: number;
    Profiles_Cloned: number;
    Sample_Stolen: number;
    Settlements_State_Shutdown: number;
    Total_Bounties: number;
    Total_Fines: number;
    Total_Murders: number;
    Total_Stolen: number;
    Turrets_Destroyed: number;
    Turrets_Overloaded: number;
    Turrets_Total: number;
    Value_Stolen_StateChange: number;
  }
  Exobiology: {
    First_Logged: number;
    First_Logged_Profits: number;
    Organic_Data: number;
    Organic_Data_Profits: number;
    Organic_Genus: number;
    Organic_Genus_Encountered: number;
    Organic_Planets: number;
    Organic_Species: number;
    Organic_Species_Encountered: number;
    Organic_Systems: number;
    Organic_Variant_Encountered: number;
  }
  Exploration: {
    Efficient_Scans: number;
    Exploration_Profits: number;
    First_Footfalls: number;
    Greatest_Distance_From_Start: number;
    Highest_Payout: number;
    OnFoot_Distance_Travelled: number;
    Planet_Footfalls: number;
    Planets_Scanned_To_Level_2: number;
    Planets_Scanned_To_Level_3: number;
    Settlements_Visited: number;
    Shuttle_Distance_Travelled: number;
    Shuttle_Journeys: number;
    Spent_On_Shuttles: number;
    Systems_Visited: number;
    Time_Played: number;
    Total_Hyperspace_Distance: number;
    Total_Hyperspace_Jumps: number;
  }
  Material_Trader_Stats: {
    Assets_Traded_In: number;
    Assets_Traded_Out: number;
    Materials_Traded: number;
    Trades_Completed: number;
  }
  Mining: {
    Materials_Collected: number;
    Mining_Profits: number;
    Quantity_Mined: number;
  }
  Multicrew: {
    Multicrew_Credits_Total: number;
    Multicrew_Fighter_Time_Total: number;
    Multicrew_Fines_Total: number;
    Multicrew_Gunner_Time_Total: number;
    Multicrew_Time_Total: number;
  }
  Passengers: {
    Passengers_Missions_Accepted: number;
    Passengers_Missions_Bulk: number;
    Passengers_Missions_Delivered: number;
    Passengers_Missions_Ejected: number;
    Passengers_Missions_VIP: number;
  }
  Search_And_Rescue: {
    Maglocks_Opened: number;
    Panels_Opened: number;
    Salvage_Illegal_POI: number;
    Salvage_Illegal_Settlements: number;
    Salvage_Legal_POI: number;
    Salvage_Legal_Settlements: number;
    SearchRescue_Count: number;
    SearchRescue_Profit: number;
    SearchRescue_Traded: number;
    Settlements_State_FireOut: number;
    Settlements_State_Reboot: number;
  }
  Smuggling: {
    Average_Profit: number;
    Black_Markets_Profits: number;
    Black_Markets_Traded_With: number;
    Highest_Single_Transaction: number;
    Resources_Smuggled: number;
  }
  Trading: {
    Assets_Sold: number;
    Average_Profit: number;
    Data_Sold: number;
    Goods_Sold: number;
    Highest_Single_Transaction: number;
    Market_Profits: number;
    Markets_Traded_With: number;
    Resources_Traded: number;
  }
}
