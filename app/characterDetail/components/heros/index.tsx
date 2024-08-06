"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { HomeConfigs } from "@/constants";

export default function Heros() {
  return (
    <div className={styles.heroPart}>
      <div className={styles.heroPartContent}>
        <div className={styles.title}>
          <img src={"/assets/home/hero_title.svg"} />
        </div>
        {/* type 1 */}
        <div className={styles.heroCategorys}>
          <div className={styles.heroPart}>
            <div className={styles.smallTitle}>
              <img src={"/assets/home/11.svg"} />
            </div>
            <div className={styles.heros}>
              <ul className={styles.heroList}>
                <li className={styles.heroItem}>
                  <div className={styles.bg} />
                  <img src={HomeConfigs[1].pic ?? ""} />
                  <div className={styles.name}>{HomeConfigs[1].name}</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.heroPart}>
            <div className={styles.smallTitle}>
              <img src={"/assets/home/22.svg"} />
            </div>
            <div className={styles.heros}>
              <ul className={styles.heroList}>
                <li className={styles.heroItem}>
                  <div className={styles.bg} />
                  <img src={HomeConfigs[0].pic ?? ""} />
                  <div className={styles.name}>{HomeConfigs[0].name}</div>
                </li>
                <li className={styles.heroItem}>
                  <div className={styles.bg} />
                  <img src={HomeConfigs[2].pic ?? ""} />
                  <div className={styles.name}>{HomeConfigs[2].name}</div>
                </li>
                <li className={styles.heroItem}>
                  <div className={styles.bg} />
                  <img src={HomeConfigs[3].pic ?? ""} />
                  <div className={styles.name}>{HomeConfigs[3].name}</div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.heroPart}>
            <div className={styles.smallTitle}>
              <img src={"/assets/home/33.svg"} />
            </div>
            <div className={styles.heros}>
              <ul className={styles.heroList}>
                <li className={styles.heroItem}>
                  <div className={styles.bg} />
                  <img src={HomeConfigs[4].pic ?? ""} />
                  <div className={styles.name}>{HomeConfigs[4].name}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* medias */}
        <div className={styles.logos}>
          <a className={styles.logo}>
            <img src={"/assets/home/icon_appstore.svg"} />
          </a>
          <a className={styles.logo}>
            <img src={"/assets/home/icon_googleplay.svg"} />
          </a>
          <a className={styles.logo}>
            <img src={"/assets/home/icon_slack.svg"} />
          </a>
          <a className={styles.logo}>
            <img src={"/assets/home/icon_microsoft.svg"} />
          </a>
        </div>
      </div>
    </div>
  );
}
