import { Game } from "@/constants/game.type";

const game: Game = {
  id: 2,
  name: "king lenny",
  pic: "/assets/skins/big2.svg",
  introduction:
    "Kind Lenny is the fourth character the playerunlocks in Adventure Mode, unlockable at stage 20He is an attacker.",
  characterIcon: "/assets/home/lock.svg",
  characterName: "defender",
  backgroundStory:
    "Kind Lenny ran an over priced garden centre called Daylight Shrubbery. His motto was, ‘If it’s free, it’s for sale.’ Basically, he took anything free like plants, flowers, fruit, veg, animals – and sold it. He took SO much of nature’s harvest people HAD to buy it from him.  Then one day he had an epiphany. He saw the face of Gogolah in his stove fire. It laughed at him and said ‘You and me are the same.’ From that moment on Lenny changed his ways. Now he wants to undo any bad he has done and help save the world from the tyranny of Gog City.",
  personality:
    "A reformed shopkeeper from hell. Kind Lenny has turned his back on fleecing customers to save the world. Armed with Pip his apple gun, justice will be done.",
  abilities: [
    {
      name: "Min! Cannon*",
      icon: "/assets/home/min_cannon.svg",
      information:
        "Shoots 18 apples at random enemies dealing 200% (+75%) damage per shot.",
      coolDown: "90 Seconds",
      max: "7",
    },
    {
      name: "Bombard",
      icon: "/assets/home/bombard.svg",
      information:
        "Deals double damage to all enemies for the next 4 (+2) attacks.",
      coolDown: "120 seconds (-20s)",
      max: "7",
    },
    {
      name: "Eat an Apple",
      icon: "/assets/home/eat_an_apple.svg",
      information: "Restores 30% (+14%) health and boosts crit chance by 40% for 16s. Affects self and an ally.",
      coolDown: "130 seconds (-10s)",
      max: "4",
    },
  ],
  skills: [
    {
      name: "XXL",
      information:
        "Increases max health by 35% (+15%).",
      unlock: "Level 7",
      max: "6*",
    },
    {
      name: "Rotten Apple",
      information:
        "Units that are hit by Lenny take 6% (+4%) more damage from all.",
      unlock: "Level 4",
      max: "12*",
    },
    {
      name: "Constitution",
      information:
        "Increase the attack of 'Min! Cannon' by 2 (+2) times.",
      unlock: "Level 8",
      max: "5*",
    },
    {
      name: "Well Fed",
      information: "Deals 40% (+15%) more damage when health is above 60%.",
      unlock: "Level 10",
      max: "15*",
    },
    {
      name: "Sharp Shooter",
      information:
        "es 50% (+25%) critical damage bonus.",
      unlock: "Level 4",
      max: "6*",
    },
    {
      name: "Reloader",
      information:
        "Increases duration of 'Eat an Apple' by 4s (+2s).",
      unlock: "Level 6",
      max: "3",
    },
    {
      name: "Big Stomach",
      information: "Deals 30% (+15%) more damage after every stage for 18s (+2s).",
      unlock: "Level 9",
      max: "6*",
    },
    {
      name: "Nicest Killer",
      information:
        "When Lenny delivers 6 critical hits, all hero damage increases by 10% (+5%) for 14s.",
      unlock: "Level 12",
      max: "15*",
    },
  ],
  items: [
    {
      name: "Irresistible cake",
      icon: "/assets/home/cooked_chiken.svg",
      bonus: ["health", "XXL skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Belt of Might",
      icon: "/assets/home/pocket_cannon.svg",
      bonus: ["Damage", "Recycle skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Golden Crown",
      icon: "/assets/home/golden_apple.svg",
      bonus: ["Gold", "Constitution skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
  ],
  outfits: [
    {
      name: "Original Kind Lenny",
      pic: "/assets/skins/2_11.svg",
      requirements: "Always Unlocked",
    },
    {
      name: "Common Kind Lenny",
      pic: "/assets/skins/2_22.svg",
      requirements: "Evolve hero to Common",
    },
    {
      name: "Uncommon Kind Lenny",
      pic: "/assets/skins/2_33.svg",
      requirements: "Evolve hero to Uncommon",
    },
    {
      name: "Legendary Kind Lenny",
      pic: "/assets/skins/2_44.svg",
      requirements: "Evolve hero to Legendary",
    },
    {
      name: "Mythical Kind Lenny",
      pic: "/assets/skins/2_55.svg",
      requirements: "Evolve hero to Mythical",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.status(200).json({ message: "success", code: 0, data: game });
}
