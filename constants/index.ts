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
