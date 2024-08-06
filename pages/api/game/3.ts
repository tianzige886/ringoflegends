import { Game } from "@/constants/game.type";

const game: Game = {
  id: 3,
  name: "sam",
  pic: "/assets/skins/big3.svg",
  introduction:
    "Sam is the 5th Almost Hero to be unlocked inAdventure Mode. He is unlocked on stage 35.He is a defender.",
  characterIcon: "/assets/home/sword.svg",
  characterName: "attacker",
  backgroundStory:
    "Sam was once the most placid dwarf ever. His Inn, The Jolly Little Evening, served fine food and drink. But Gog’s men destroyed it. This turned Sam mad with desire for revenge and it’s what drives him now. But, he’s still a peaceful man at heart so he's not as threatening. ‘Prepare to be viciously stared at!’, is one of his best taunts.",
  personality:
    "Sam the dwarf was an Innkeeper until Gog's men levelled his village of Summers heart. The once peaceful dwarf now wants revenge.",
  abilities: [
    {
      name: "Revenge*",
      icon: "/assets/home/revenge.svg",
      information:
        "For 15s, becomes immune to damage, and attacks deal 200% (+50%) more damage.",
      coolDown: "210 seconds",
      max: "4",
    },
    {
      name: "Shield'em All",
      icon: "/assets/home/shieldem_all.svg",
      information: "Shield all allies for 20% (+7%) of their max health",
      coolDown: "120 seconds",
      max: "10",
    },
    {
      name: "Slam",
      icon: "/assets/home/slam.svg",
      information:
        "Dashes forward with his shield, dealing 500% (+250%) damage and stunning all enemies for 3s (+1s).",
      coolDown: "60 seconds",
      max: "6",
    },
  ],
  skills: [
    {
      name: "Block",
      information: "Gives 14% (+5.5%) chance to block 90% of incoming damage.",
      unlock: "Level 7",
      max: "6*",
    },
    {
      name: "Repel",
      information:
        "When an ally's shield is broken, boosts their attack damage by 28% (+8%) for 7s.",
      unlock: "Level 7",
      max: "9*",
    },
    {
      name: "Arrogant",
      information:
        "Increases Sam's health by 20% (+5%). Enemies are 100% (+50%) more likely to attack Sam than other heroes.",
      unlock: "Level 9",
      max: "6*",
    },
    {
      name: "Master Shielder",
      information: "Reduces the cooldown of 'Shield'em All' by 8s (+8s).",
      unlock: "Level 12",
      max: "8*",
    },
    {
      name: "Hill Man",
      information:
        "Each time Sam attacks an enemy, increases the loot from it by 10% (+5%) for 10s. (Doesn’t work on chests).",
      unlock: "Level 4",
      max: "6*",
    },
    {
      name: "Punishment",
      information:
        "When attacked 3 times, deals 300% (+50%) team damage back to the enemy.",
      unlock: "Level 6",
      max: "9*",
    },
    {
      name: "Transcendence",
      information:
        "Deals 30% (+15%) more damage after every stage for 18s (+2s).",
      unlock: "Level 8",
      max: "10",
    },
    {
      name: "Let Them Come",
      information: "‘Revenge' deals 80% (+40%) more team damage per dead ally.",
      unlock: "Level 14",
      max: "9",
    },
  ],
  items: [
    {
      name: "Spit pot",
      icon: "/assets/home/spit_pot.svg",
      bonus: ["health", "Block skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Axe of revenge",
      icon: "/assets/home/axe_of_revenge.svg",
      bonus: ["Damage", "Punishment skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Golden bracer",
      icon: "/assets/home/golden_bracer.svg",
      bonus: ["Gold", "Hill man skill points"],
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
      name: "Original Sam",
      pic: "/assets/skins/3_11.svg",
      requirements: "Always Unlocked",
    },
    {
      name: "Common Sam",
      pic: "/assets/skins/3_22.svg",
      requirements: "Evolve hero to Common",
    },
    {
      name: "Uncommon Sam",
      pic: "/assets/skins/3_33.svg",
      requirements: "Evolve hero to Uncommon",
    },
    {
      name: "Legendary Sam",
      pic: "/assets/skins/3_44.svg",
      requirements: "Evolve hero to Legendary",
    },
    {
      name: "Mythical Sam",
      pic: "/assets/skins/3_55.svg",
      requirements: "Evolve hero to Mythical",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.status(200).json({ message: "success", code: 0, data: game });
}
