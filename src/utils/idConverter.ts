export const combatRanks = (id: number) => {
  const convert: string[] = [
    'Harmless',
    'Mostly Harmless',
    'Novice',
    'Competent',
    'Expert',
    'Master',
    'Dangerous',
    'Deadly',
    'Elite'
  ]

  return convert[id];
}

export const tradeRanks = (id: number) => {
  const convert: string[] = [
    'Penniless',
    'Mostly Pennliess',
    'Peddler',
    'Dealer',
    'Merchant',
    'Broker',
    'Entrepreneur',
    'Tycoon',
    'Elite'
  ]

  return convert[id];
}

export const explorationRanks = (id: number) => {
  const convert: string[] = [
    'Aimless',
    'Mostly Aimless',
    'Scout',
    'Surveyor',
    'Explorer',
    'Pathfinder',
    'Ranger',
    'Pioneer',
    'Elite'
  ]

  return convert[id];
}

export const federationRanks = (id: number) => {
  const convert: string[] = [
    'None',
    'Recruit',
    'Cadet',
    'Midshipman',
    'Petty Officer',
    'Chief Petty Officer',
    'Warrant Officer',
    'Ensign',
    'Lieutenant',
    'Lt. Commander',
    'Post Commander',
    'Post Captain',
    'Rear Admiral',
    'Vice Admiral',
    'Admiral'
  ]

  return convert[id];
}

export const empireRanks = (id: number) => {
  const convert: string[] = [
    'None',
    'Outsider',
    'Serf',
    'Master',
    'Squire',
    'Knight',
    'Lord',
    'Baron',
    'Viscount ',
    'Count',
    'Earl',
    'Marquis',
    'Duke',
    'Prince',
    'King'
  ]

  return convert[id];
}

export const cqcRanks = (id: number) => {
  const convert: string[] = [
    'Helpless',
    'Mostly Helpless',
    'Amateur',
    'Semi Professional',
    'Professional',
    'Champion',
    'Hero',
    'Legend',
    'Elite'
  ]

  return convert[id];
}