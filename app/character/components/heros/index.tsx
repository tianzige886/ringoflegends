"use client";
import Image from "next/image";
import styles from "./index.module.css";
import LogoSvg from "@/assets/home/banner_logo.svg";
import TitleImage from "@/assets/home/hero_title.svg";
import Title1Image from "@/assets/home/11.svg";
import Title2Image from "@/assets/home/22.svg";
import Title3Image from "@/assets/home/33.svg";
import AppstoreLogo from "@/assets/home/icon_appstore.svg";
import IconGooglePlay from "@/assets/home/icon_googleplay.svg";
import IconAddToSlack from "@/assets/home/icon_slack.svg";
import IconMicrosoft from "@/assets/home/icon_microsoft.svg";

export default function Heros() {
  return (
    <div className={styles.heroPart}>
      <div className={styles.heroPartContent}>
        <div className={styles.logo}>
          <img src={LogoSvg} />
        </div>
        <div className={styles.desc}>
          ring of legden is the source of all life, and thus is very powerful.
          This is why Gogolah wants to poison and control it all. His corruption
          is spreading, all true heroes have perished against his armies, and
          someone has to stand up against him. Anyone, really!
        </div>
        <div className={styles.title}>
          <img src={TitleImage} />
        </div>
        {/* list 1 */}
        <div className={styles.smallTitle}>
          <img src={Title1Image} />
        </div>
        <div className={styles.heros}>
          <ul className={styles.heroList}>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
          </ul>
        </div>
        {/* list 2 */}
        <div className={styles.smallTitle}>
          <img src={Title2Image} />
        </div>
        <div className={styles.heros}>
          <ul className={styles.heroList}>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
          </ul>
        </div>
        {/* list 3 */}
        <div className={styles.smallTitle}>
          <img src={Title3Image} />
        </div>
        <div className={styles.heros}>
          <ul className={styles.heroList}>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li className={styles.heroItem}>
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
          </ul>
        </div>

        {/* medias */}
        <div className={styles.logos}>
          <a className={styles.logo}>
            <img src={AppstoreLogo} />
          </a>
          <a className={styles.logo}>
            <img src={IconGooglePlay} />
          </a>
          <a className={styles.logo}>
            <img src={IconAddToSlack} />
          </a>
          <a className={styles.logo}>
            <img src={IconMicrosoft} />
          </a>
        </div>
      </div>
    </div>
  );
}
