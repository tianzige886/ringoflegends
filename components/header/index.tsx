"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "./index.module.css";
// import LogoImage from "@/assets/home/header_logo.svg";
import { NavListConfig } from "@/constants/index";
// import Link from "next/link";
// import Image from "next/image";
// import IconFacebook from "@/assets/home/icon_facebook.svg";
// import IconX from "@/assets/home/icon_x.svg";
// import IconDiscord from "@/assets/home/discord.svg";

export default function HeaderNav() {
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {}, []);

  console.log("pathName");
  console.log(pathName);

  return (
    <div className={styles.head}>
      <div className={styles.headContent}>
        <div className={styles.logo}>
          <img src={"/assets/home/header_logo.svg"} />
        </div>
        <div className={styles.nav}>
          <ul className={styles.navList}>
            {NavListConfig?.map((item) => {
              return (
                <li
                  key={item?.id}
                  className={`${styles.item} ${
                    pathName === item?.link ? styles.activeItem : ""
                  }`}
                >
                  <a href={item?.link}>{item?.name}</a>
                  {item?.link === pathName && <div className={styles.line_} />}
                </li>
              );
            })}
          </ul>
          <div className={styles.line} />
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
      </div>
    </div>
  );
}
