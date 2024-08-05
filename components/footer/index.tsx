"use client";
import styles from "./index.module.css";
// import FootLogo from "@/assets/home/foot_logo.svg";
import Link from "next/link";
// import Image from "next/image";
// import IconFacebook from "@/assets/home/icon_facebook.svg";
// import IconX from "@/assets/home/icon_x.svg";
// import IconDiscord from "@/assets/home/discord.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>game story</Link>
            </li>
            <li>
              <Link href={"https://www.baidu.com"}>game story</Link>
            </li>
          </ul>
        </div>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>game story</Link>
            </li>
            <li>
              <Link href={"https://www.baidu.com"}>game story</Link>
            </li>
          </ul>
        </div>
        <div className={styles.part}>
          <img className={styles.footLogo} src={"/assets/home/foot_logo.svg"} />
        </div>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>blog</Link>
            </li>
            <li>
              <Link href={"https://www.baidu.com"}>support</Link>
            </li>
          </ul>
        </div>
        <div className={styles.part}>
          <ul>
            <li>
              <Link href={"https://www.baidu.com"}>community</Link>
            </li>
            <li>
              <Link href={"https://www.baidu.com"}>team</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomLeft}>
          © ring of legdens | All Rights Reserved
        </div>
        <div className={styles.medias}>
          <a className={styles.media}>
            <img src={"/assets/home/icon_facebook.svg"} />
          </a>
          <a className={styles.media}>
            <img src={"/assets/home/icon_x.svg"} />
          </a>
          <a className={styles.media}>
            <img src={"/assets/home/discord.svg"} />
          </a>
        </div>
      </div>
    </footer>
  );
}
