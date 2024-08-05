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
            <div className={styles.rightDesc}>
              {data?.name} is a defender tant can be unlocjked reaching stage
              245 in adventure mode.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.backgroundStoryTitle}>
        <img src={"/assets/home/background_story_title.svg"} />
      </div>
      <div className={styles.backgroundStoryDesc}>
        <p>
          Hilt works as a tester for his Grandfather, who is a blacksmith in the
          village of Drald in the Verdant Domains. Anything Grandfather makes,
          he gives to Hilt, for Hilt has a terrible curse upon him: he breaks
          almost everything he touches. He doesn’t do it on purpose; things just
          break or stop working when he holds them.
        </p>
        <br />
        <br />
        <p>
          Grandfather hands him swords, shields, daggers, etc, to see where the
          weak points are when they break. He then perfects the designs.
        </p>
        <br />
        <br />
        <p>
          Hilt has always dreamt of becoming a knight and reads books about
          heroic deeds and noble quests. But, it’s not for him – as his family
          always say. He’d only break the horse or something.
        </p>
      </div>
    </div>
  );
}
