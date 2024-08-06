import { Game } from "@/constants/game.type";

const game: Game = {
  id: 1,
  name: "Vexx",
  pic: "/assets/skins/big1.svg",
  introduction:
    "Vexx was the first almost hero to be unlocked, she was unlocked in Stage 6. She's an aggressor.",
  characterIcon: "/assets/home/sword.svg",
  characterName: "attacker",
  backgroundStory:
    "Vexx is a forest girl from the Arboreal Cloak. She’s calm when she’s alone with trees, but is useless around people, elves, dwarves and any other living thing. This is when her anger management problems manifest. She takes almost everything as a personal insult until she thinks it through. She’s quite a scary person to be around, especially with her huge hammer, Sid. Vexx would rather confront you than get to know you, so this makes life for Hilt very difficult especially as he fell head over heels in love with her. Even when he eventually confesses his love for her she thinks it’s a trap and beats him up.",
  personality:
    "A blacksmith's apprentice cursed by a spell. All he touches falls apart. He'd love to be a noble knight but it's never gonna happen.",
  abilities: [
    {
      name: "Shock Wave*",
      icon: "/assets/home/snow_wave.svg",
      information:
        "Slams hammer to the ground 6 times, dealing 500% (+250%) damage to all.",
      coolDown: "300 Seconds (-15s)",
      max: "7",
    },
    {
      name: "Concentration",
      icon: "/assets/home/concentration.svg",
      information:
        "Concentrates next attack and deals 300% (+150%) 'team' damage to all enemies.",
      coolDown: "150 Seconds",
      max: "7",
    },
    {
      name: "Fast & Cheerful",
      icon: "/assets/home/fast_cheerful.svg",
      information: "Gains 100% attack speed for 12s (+3s).",
      coolDown: "140 Seconds (-30s)",
      max: "4",
    },
  ],
  skills: [
    {
      name: "Village Girl",
      information:
        "Being a village girl, she gets tired 25% (+15%) less often.",
      unlock: "Level 7",
      max: "6*",
    },
    {
      name: "Mad Girl",
      information:
        "Each attack increases speed and damage by 30% (+5%). Stacks 5 times, resets on new target.",
      unlock: "Level 7",
      max: "9*",
    },
    {
      name: "Chill Down",
      information: "Killing an enemy reduces tiredness by 10% (+10%).",
      unlock: "Level 9",
      max: "6*",
    },
    {
      name: "Collect Debris",
      information:
        "'Killing a unit reduces the cost of next upgrade by 3% (+1%). Max: 45% (+5%).",
      unlock: "Level 12",
      max: "8*",
    },
    {
      name: "Hard Training",
      information:
        "Every attack Vexx makes reduces the cooldown of 'Shock Wave' by 0.3s (+0.1s).",
      unlock: "Level 4",
      max: "6*",
    },
    {
      name: "Recycle",
      information: "Increase all gold earnings by 20% (+5%).",
      unlock: "Level 6",
      max: "9*",
    },
    {
      name: "Forge",
      information:
        "Deals 30% (+15%) more damage after every stage for 18s (+2s).",
      unlock: "Level 10",
      max: "12*",
    },
    {
      name: "arth Quake",
      information:
        "Increases the attack count of 'Shock Wave' by 1 (+1) times.",
      unlock: "Level 12",
      max: "10*",
    },
  ],
  items: [
    {
      name: "Irresistible cake",
      icon: "/assets/home/irresistible_cake.svg",
      bonus: ["health", "Hard training skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Belt of Might",
      icon: "/assets/home/belt_of_might.svg",
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
      icon: "/assets/home/golden_crown.svg",
      bonus: ["Gold", "Village Girl skill points"],
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
      name: "Original Vexx",
      pic: "/assets/skins/1_11.svg",
      requirements: "Always Unlocked",
    },
    {
      name: "Common Vexx",
      pic: "/assets/skins/1_22.svg",
      requirements: "Evolve hero to Common",
    },
    {
      name: "Uncommon Vexx",
      pic: "/assets/skins/1_33.svg",
      requirements: "Evolve hero to Uncommon",
    },
    {
      name: "Legendary Vexx",
      pic: "/assets/skins/1_44.svg",
      requirements: "Evolve hero to Legendary",
    },
    {
      name: "Mythical Vexx",
      pic: "/assets/skins/1_55.svg",
      requirements: "Evolve hero to Mythical",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.status(200).json({ message: "success", code: 0, data: game });
}
