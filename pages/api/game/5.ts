import { Game } from "@/constants/game.type";

const game: Game = {
  id: 5,
  name: "lia",
  pic: "/assets/skins/big5.svg",
  introduction: "Lia is unlocked on stage 140.She is an supporter.",
  characterIcon: "/assets/home/sward2.svg",
  characterName: "supporter",
  backgroundStory:
    "Lia is an upbeat character because even before she began her training with the Almost Heroes she overcame a great personal problem.  She could not fire a bow in a straight line. This was a great dishonor as she is an Fortune-Archer Elf - a rare type of elfin folk that are naturally lucky AND skilled in the art of bows and arrows-. To beat her lack of accuracy she covers her eyes and relies on her own natural good luck. It works brilliantly and she is highly respected amongst the Fortune-Archer Elves.",
  personality:
    "Lia is annoyingly upbeat and positive. You cannot get an ounce of sense out of her. She's the most accurate bow person who ever lived.",
  abilities: [
    {
      name: "Target Practice*",
      icon: "/assets/home/target_practice.svg",
      information:
        "Increases miss chance from 20% to 60% and boosts attack speed & damage by 250% for 8s (+2s).",
      coolDown: "150 seconds",
      max: "6",
    },
    {
      name: "Swift Moves",
      icon: "/assets/home/swift_moves.svg",
      information: "Increases dodge by 80% and crit chance by 30% for 8s (+1s)",
      coolDown: "150 seconds (-10s)",
      max: "6",
    },
    {
      name: "Snipe",
      icon: "/assets/home/snipe.svg",
      information:
        "Shoots a focused arrow that deals 1.20K% (+600%) damage to a single target.",
      coolDown: "80 seconds",
      max: "9",
    },
  ],
  skills: [
    {
      name: "Accuracy",
      information: "Each shot missed increases next damage by 40% (+15%)",
      unlock: "Level 4",
      max: "6*",
    },
    {
      name: "Elegance",
      information:
        "Dodging while 'Swift Moves' is active increases the skill's duration by 1s (+0.5s). Max 8s (+2s)",
      unlock: "Level 6",
      max: "9*",
    },
    {
      name: "Tracker",
      information:
        "Increases the chance to find treasure chests by 5% (+5%)",
      unlock: "Level  8",
      max: "6*",
    },
    {
      name: "Multi Shot",
      information: "Gives 10% (+5%) chance on attack to shoot arrows for all enemies",
      unlock: "Level 10",
      max: "8*",
    },
    {
      name: "Feed the Poor",
      information:
        "Every 5 consecutive hits, restores 5% (+1%) health.",
      unlock: "Level 4",
      max: "6*",
    },
    {
      name: "Not Deaf",
      information:
        "Every hit that doesn’t miss increases damage by 8% (+2%) for 6s.",
      unlock: "Level 6",
      max: "9*",
    },
    {
      name: "Survivalist",
      information:
        "‘Increases damage reduction by 15% (+5%). When she takes damage from an enemy, decreases miss chance by 1% (+1%) for 4s.",
      unlock: "Level 8",
      max: "12*",
    },
    {
      name: "One Shot",
      information: "‘After she kills 12 (-1) enemies, next shot kills a non-boss enemy instantly",
      unlock: "Level 10",
      max: "10*",
    },
  ],
  items: [
    {
      name: "Fish Oil",
      icon: "/assets/home/fish_oil.svg",
      bonus: ["health", "Feed the poor skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Target Dummy",
      icon: "/assets/home/target_dummy.svg",
      bonus: ["Damage", "Not deaf skill points"],
      normal: ["+10%", "+1"],
      scarce: ["+25%", "+2"],
      rare: ["+100%", "+3"],
      epic: ["+250%", "+4"],
      legendary: ["+1000%", "+5"],
      mythical: ["+2000%", "+6"],
    },
    {
      name: "Golden frame",
      icon: "/assets/home/golden_frame.svg",
      bonus: ["Gold", "Tracker skill points"],
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
      name: "Original Lia",
      pic: "/assets/skins/4_11.svg",
      requirements: "Always Unlocked",
    },
    {
      name: "Common Lia",
      pic: "/assets/skins/4_22.svg",
      requirements: "Evolve hero to Common",
    },
    {
      name: "Uncommon Lia",
      pic: "/assets/skins/4_33.svg",
      requirements: "Evolve hero to Uncommon",
    },
    {
      name: "Legendary Lia",
      pic: "/assets/skins/4_44.svg",
      requirements: "Evolve hero to Legendary",
    },
    {
      name: "Mythical Lia",
      pic: "/assets/skins/4_55.svg",
      requirements: "Evolve hero to Mythical",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.status(200).json({ message: "success", code: 0, data: game });
}
