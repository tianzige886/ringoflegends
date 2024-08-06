"use client";
// import Image from "next/image";
import styles from "./index.module.css";
// import BannerLogo from "@/assets/home/banner_logo.svg";
// import AppstoreLogo from "@/assets/home/icon_appstore.svg";
// import IconGooglePlay from "@/assets/home/icon_googlePlay.svg";
// import IconAddToSlack from "@/assets/home/icon_slack.svg";
// import IconMicrosoft from "@/assets/home/icon_microsoft.svg";
// import ButtonForBanner from "@/assets/home/button.svg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <img
          className={styles.bannerLogo}
          src={"/assets/home/banner_logo.svg"}
        />
        <button className={styles.bannerButton}>
          <img src={"/assets/home/button.svg"} />
        </button>
        <div className={styles.bannerBottom}>
          <div className={styles.desc}>
            our first mobile game coming soon tO...
          </div>
          <div className={styles.logos}>
            <a className={styles.logo}>
              <img src={"/assets/home/icon_appstore.svg"} />
            </a>
            <a className={styles.logo}>
              <img src={"/assets/home/icon_googlePlay.svg"} />
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
    </div>
  );
}
