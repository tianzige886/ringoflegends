export interface Abilities {
  icon: string;
  name: string;
  information: string;
  coolDown: string;
  max: string;
}
export interface Skills {
  name: string;
  information: string;
  unlock: string;
  max: string;
}
export interface Items {
  icon: string;
  name: string;
  bonus: string[];
  normal: string[];
  scarce: string[];
  rare: string[];
  epic: string[];
  legendary: string[];
  mythical: string[];
}
export interface Outfits {
  name: string;
  pic: string;
  requirements: string;
}
export interface Game {
  id: number;
  name: string;
  pic: string;
  introduction: string;
  characterName: string;
  characterIcon: string;
  abilities: Abilities[];
  skills: Skills[];
  items: Items[];
  outfits: Outfits[];
}
