"use client";
import Image from "next/image";
import styles from "./index.module.css";
import TitleSvg from "@/assets/home/title_featured_news.svg";
import Feature01 from "@/assets/home/feature_01.png";
import Feature02 from "@/assets/home/feature_02.png";
import Feature03 from "@/assets/home/feature_03.png";

export default function FeatureNews() {
  return (
    <div className={styles.featureNews}>
      <div className={styles.title}>
        <img src={TitleSvg} />
      </div>
      <div className={styles.listPart}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <img
              className={styles.itemImage}
              src={"/assets/home/feature_01.png"}
            />
            <div className={styles.itemBottom}>
              <div className={styles.title}>FIGHT EVIL!</div>
              <div className={styles.desc}>
                Choose a magic ring and a bunch of useless idiots to face hordes
                of enemies
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.itemImage}
              src={"/assets/home/feature_02.png"}
            />
            <div className={styles.itemBottom}>
              <div className={styles.title}>UNLOCK EVERYTHING!</div>
              <div className={styles.desc}>
                Upgrade your heroes, gear and bonuses to go from zero to
                (almost) hero
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <img
              className={styles.itemImage}
              src={"/assets/home/feature_03.png"}
            />
            <div className={styles.itemBottom}>
              <div className={styles.title}>IMPROVE EVERY TIME!</div>
              <div className={styles.desc}>
                Leave your heroes fighting & come back to collect the rewards!
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
