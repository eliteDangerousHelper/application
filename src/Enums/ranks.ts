const ranks: {[type: string]: {[index: number]: string}} = {
  combat: {
    0: "Inoffensif",
    1: "Bleu",
    2: "Novice",
    3: "Compétent",
    4: "Expert",
    5: "Maitre",
    6: "Vétéran",
    7: "Letal",
    8: "Elite"
  },
  trade: {
    0: "Sans-le-sou",
    1: "Mendiant",
    2: "Boutiquier",
    3: "Revendeur",
    4: "Marchand",
    5: "Courtier",
    6: "Entrepreneur",
    7: "Magnat",
    8: "Elite"
  },
  explore: {
    0: "Vagabond",
    1: "Touriste",
    2: "Voyageur",
    3: "Éclaireur",
    4: "Prospecteur",
    5: "Découvreur",
    6: "Navigateur",
    7: "Pionnier",
    8: "Elite"
  },
  federation: {
    0: "None",
    1: "Recrue",
    2: "Cadet",
    3: "Matelot",
    4: "Second Maître",
    5: "Premier Maître",
    6: "Major",
    7: "Enseigne",
    8: "Lieutenant",
    9: "Captitaine de Corvette",
    10: "Capitaine de Frégate",
    11: "Capitaine de Vaisseau",
    12: "Contre-Amiral",
    13: "Vice-Amiral",
    14: "Amiral"
  },
  empire: {
    0: "None",
    1: "Étranger",
    2: "Serf",
    3: "Vilain",
    4: "Ecuyer",
    5: "Chevalier",
    6: "Banneret",
    7: "Baron",
    8: "Vicomte ",
    9: "Comte",
    10: "Marquis",
    11: "Duc",
    12: "Archiduc",
    13: "Prince",
    14: "Roi"
  },
  cqc: {
    0: "Helpless",
    1: "Mostly Helpless",
    2: "Amateur",
    3: "Semi Professional",
    4: "Professional",
    5: "Champion",
    6: "Hero",
    7: "Legend",
    8: "Elite"
  }
};

export default ranks;