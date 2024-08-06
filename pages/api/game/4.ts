import { Game } from "@/constants/game.type";

const game: Game = {
  id: 4,
  name: "tam",
  pic: "/assets/skins/big4.svg",
  introduction: "Tam is a Supporter that can be unlocked atstage 415.",
  characterIcon: "/assets/home/sword.svg",
  characterName: "attacker",
  backgroundStory:
    "and his terrible friends invented ‘drunken goat eating’ – don’t ask. As a result he was kicked out of the family, the town and sent into exile.  A reformed character, he’s trying to impress his cousin Sam so that he might put a word in for him and get Tam back into the family.",
  personality:
    "A cousin of the dwarf Sam that the family disowned for ‘drunken goat eating.’ Joining the Green Man is his way of making amends.",
  abilities: [
    {
      name: "Roar",
      icon: "/assets/home/roar.svg",
      information:
        "Stuns all enemies for 5s and increases the damage of heroes by 100% for 10s (+2.5s)",
      coolDown: "360 Seconds",
      max: "9",
    },
    {
      name: "Crow attack",
      icon: "/assets/home/crow_attack.svg",
      information: "Calls a crow from above to attack enemies to blind them for 6s (+1s) (increases their miss chance by 60%(+3%))",
      coolDown: "150 Seconds",
      max: "8",
    },
    {
      name: "Flare",
      icon: "/assets/home/flare.svg",
      information:
        "Fires a flare at the enemy area, reducing the defense of all the enemies by 30% (+5%) for 8s (+2s). Can affect multiple waves.",
      coolDown: "150 Seconds",
      max: "7",
    },
  ],
  skills: [
    {
      name: "Frenzy",
      information: "Crow Attack also increases the attack speed of Tam by 50% (+25%) for 10s (+1s).",
      unlock: "Level 5",
      max: "5*",
    },
    {
      name: "Instincts",
      information:
        "Crow attack also reduces the cooldown of Roar by 8s (+3s).",
      unlock: "Level 8",
      max: "5*",
    },
    {
      name: "Death from above",
      information:
        "Crow attack also deals 900% (+300%) damage to all enemies.",
      unlock: "Level  10",
      max: "9*",
    },
    {
      name: "Call of the wild",
      information: "'Whenever Tam attacks, reduces the cooldown of Crow Attack by 0.1s (+0.1s).",
      unlock: "Level 14",
      max: "10*",
    },
    {
      name: "Mark",
      information:
        "14% (+2%) chance with each attack to mark a target. Ring damage on a marked target increases its damage by 90% (+20%) and removes the mark.",
      unlock: "Level 4",
      max: "9*",
    },
    {
      name: "Preparation",
      information:
        "First 6s (+1s) of the boss fight, everyone takes 20% (+5%) less damage.",
      unlock: "Level 7",
      max: "5*",
    },
    {
      name: "Bandage",
      information:
        "Every 70s (-4s), a bandage is applied to the most injured ally, healing 30% (+3%) of their max health.",
      unlock: "Level 10",
      max: "11",
    },
    {
      name: "Feign Death",
      information: "When Tam takes damage below 20% health, he gains immunity for 11s (+1s). ",
      unlock: "Level 12",
      max: "10*",
    },
  ],
  items: [
    {
      name: "Spit pot",
      icon: "/assets/home/juicy_meat.svg",
      bonus: ["health", "Preparation skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "eadly shells",
      icon: "/assets/home/eadly_shells.svg",
      bonus: ["Damage", "Frenzy skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Golden feather",
      icon: "/assets/home/golden_feather.svg",
      bonus: ["Gold", "Instincts skill points"],
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
      name: "Original Tam",
      pic: "/assets/skins/5_11.svg",
      requirements: "Always Unlocked",
    },
    {
      name: "Common Tam",
      pic: "/assets/skins/5_22.svg",
      requirements: "Evolve hero to Common",
    },
    {
      name: "Uncommon Tam",
      pic: "/assets/skins/5_33.svg",
      requirements: "Evolve hero to Uncommon",
    },
    {
      name: "Legendary Tam",
      pic: "/assets/skins/5_44.svg",
      requirements: "Evolve hero to Legendary",
    },
    {
      name: "Mythical Tam",
      pic: "/assets/skins/5_55.svg",
      requirements: "Evolve hero to Mythical",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.status(200).json({ message: "success", code: 0, data: game });
}
