"use client";
import styles from "./index.module.css";
import Image from "next/image";
import Iphone from "@/assets/home/iPhone.svg";
import TitleSvg from "@/assets/home/gamestory_title.svg";

export default function GameStory() {
  return (
    <div className={styles.gameStory}>
      <div className={styles.linear} />
      <div className={styles.gameStoryContent}>
        <div className={styles.contentLeft}>
          <img src={Iphone} />
        </div>
        <div className={styles.contentRight}>
          <img src={TitleSvg} className={styles.title} />
          <div className={styles.desc}>
            ring of legends is probably one of the most addicting RPG clicker
            games you will find out there today. In this incremental RPG clicker
            game, you will meet a bunch of idle heroes, also known as the most
            useless idiots to walk this earth, who embark on a quest to be
            slightly less useless idiots.
            <br />
            <br />
            In ROL you’ll find idle heroes with upgrades, quests, ancient
            artifacts and secrets to unlock to become almost heroes. Oh, and
            there’s lots of clicking to do. Yup, that’s what clicker games are
            all about.
            <br />
            <br />
            Have you nearly got what it takes to become almost a hero?
          </div>
        </div>
      </div>
    </div>
  );
}
