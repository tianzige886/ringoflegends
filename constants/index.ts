import { HomeConfig } from "@/constants/game.type";

interface NavType {
  id: number;
  name: string;
  link?: string;
  target?: string;
}
interface TabType {
  value: number;
  label: string;
}
export const NavListConfig: NavType[] = [
  { id: 1, name: "game story", link: "/" },
  {
    id: 2,
    name: "CHARACTERS",
    link: "/character",
  },
  {
    id: 3,
    name: "support",
    link: "https://www.baidu.com",
    target: "_blank",
  },
  {
    id: 4,
    name: "community",
    link: "https://www.baidu.com",
    target: "_blank",
  },
];

export const TabsConfig: TabType[] = [
  { value: 1, label: "abilities" },
  { value: 2, label: "SKILLS" },
  { value: 3, label: "ITEMs" },
  { value: 4, label: "outfits" },
];

export const HomeConfigs: HomeConfig[] = [
  {
    id: 1,
    name: "Vexx",
    pic: "/assets/home_pics/1_.svg",
    bigPic: "/assets/home_pics/1.svg",
    introduction:
      "Vexx was the first almost hero to be unlocked, she was unlocked in Stage 6. She's an aggressor.",
  },
  {
    id: 2,
    name: "king lenny",
    pic: "/assets/home_pics/2_.svg",
    bigPic: "/assets/home_pics/2.svg",
    introduction:
      "Kind Lenny is the fourth character the player unlocks in Adventure Mode, unlockable at stage 20He is an attacker.",
  },
  {
    id: 3,
    name: "sam",
    pic: "/assets/home_pics/3_.svg",
    bigPic: "/assets/home_pics/3.svg",
    introduction:
      "Sam is the 5th Almost Hero to be unlocked inAdventure Mode. He is unlocked on stage 35.He is a defender.",
  },
  {
    id: 4,
    name: "tam",
    pic: "/assets/home_pics/4_.svg",
    bigPic: "/assets/home_pics/4.svg",
    introduction: "Tam is a Supporter that can be unlocked atstage 415.",
  },
  {
    id: 5,
    name: "lia",
    pic: "/assets/home_pics/5_.svg",
    bigPic: "/assets/home_pics/5.svg",
    introduction: "Lia is unlocked on stage 140.She is an supporter.",
  },
];
