"use client";
import styles from "./index.module.css";
// import FootLogo from "@/assets/home/foot_logo.svg";
import Link from "next/link";
import { useState } from "react";
// import Image from "next/image";
// import IconFacebook from "@/assets/home/icon_facebook.svg";
// import IconX from "@/assets/home/icon_x.svg";
// import IconDiscord from "@/assets/home/discord.svg";

export default function Footer() {
  const [isXHover, setIsXHover] = useState<boolean>(false);
  const [isTgHover, setIsTgHover] = useState<boolean>(false);
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>game story</Link>
            </li>
          </ul>
        </div>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>CHARACTERS</Link>
            </li>
          </ul>
        </div>
        <div className={styles.part}>
          <img className={styles.footLogo} src={"/assets/home/foot_logo.svg"} />
        </div>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>twitter</Link>
            </li>
          </ul>
        </div>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>telegram</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          © ring of legdens | All Rights Reserved
        </div>
        <div className={styles.medias}>
          {/*<a className={styles.media}>*/}
          {/*  <img src={"/assets/home/icon_facebook.svg"} />*/}
          {/*</a>*/}
          <a
            className={styles.media}
            onMouseEnter={() => setIsXHover(true)}
            onMouseLeave={() => setIsXHover(false)}
          >
            <img
              src={
                isXHover
                  ? "/assets/home/x_hover.svg"
                  : "/assets/home/icon_x.svg"
              }
            />
          </a>
          <a
            className={styles.media}
            onMouseEnter={() => setIsTgHover(true)}
            onMouseLeave={() => setIsTgHover(false)}
          >
            <img
              src={
                isTgHover
                  ? "/assets/home/tg_hover.svg"
                  : "/assets/home/telegram_normal.svg"
              }
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
