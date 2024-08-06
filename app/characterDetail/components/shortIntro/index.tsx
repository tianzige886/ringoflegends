"use client";
// import Image from "next/image";
import styles from "./index.module.css";
// import IntroductionTitle from "@/assets/home/introduction_title.svg";
// import HeroImage from "@/assets/home/testHero.svg";
// import LockImage from "@/assets/home/lock.svg";
// import BackgroundStoryTitle from "@/assets/home/background_story_title.svg";
import { Game } from "@/constants/game.type";

export default function ShortIntro(props: { data: Game }) {
  const { data } = props;
  return (
    <div className={styles.shortIntro}>
      <div className={styles.title}>
        <img src={"/assets/home/introduction_title.svg"} />
      </div>
      <div className={styles.intro}>
        <div className={styles.introContent}>
          <div className={styles.introContentLeft}>
            <img src={data?.pic ?? ""} width={162} />
          </div>
          <div className={styles.introContentRight}>
            <div className={styles.rightTitle}>
              <img
                src={data?.characterIcon ?? ""}
                width={19}
                className={styles.rightIcon}
              />
              <span className={styles.rightTitleTxt}>
                {data?.characterName}
              </span>
            </div>
            <div className={styles.name}>{data?.name}</div>
            <div className={styles.rightDesc}>{data?.introduction}</div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundStoryTitle}>
        <img src={"/assets/home/background_story_title.svg"} />
      </div>
      <div className={styles.backgroundStoryDesc}>
        <p>{data?.backgroundStory}</p>
      </div>
    </div>
  );
}
