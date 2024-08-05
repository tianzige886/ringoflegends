"use client";
import Image from "next/image";
import styles from "./index.module.css";
// import LogoSvg from "@/assets/home/banner_logo.svg";
// import TitleImage from "@/assets/home/hero_title.svg";
// import Title1Image from "@/assets/home/11.svg";
// import Title2Image from "@/assets/home/22.svg";
// import Title3Image from "@/assets/home/33.svg";
// import AppstoreLogo from "@/assets/home/icon_appstore.svg";
// import IconGooglePlay from "@/assets/home/icon_googleplay.svg";
// import IconAddToSlack from "@/assets/home/icon_slack.svg";
import IconMicrosoft from "@/assets/home/icon_microsoft.svg";

export default function Heros() {
  return (
    <div className={styles.heroPart}>
      <div className={styles.heroPartContent}>
        <div className={styles.title}>
          <img src={"/assets/home/hero_title.svg"} />
        </div>
        {/* list 1 */}
        <div className={styles.smallTitle}>
          <img src={"/assets/home/11.svg"} />
        </div>
        <div className={styles.heros}>
          <ul className={styles.heroList}>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
          </ul>
        </div>
        {/* list 2 */}
        <div className={styles.smallTitle}>
          <img src={"/assets/home/22.svg"} />
        </div>
        <div className={styles.heros}>
          <ul className={styles.heroList}>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
          </ul>
        </div>
        {/* list 3 */}
        <div className={styles.smallTitle}>
          <img src={"/assets/home/33.svg"} />
        </div>
        <div className={styles.heros}>
          <ul className={styles.heroList}>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={"/assets/home/banner_logo.svg"} />
              <div className={styles.name}>test</div>
            </li>
          </ul>
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
