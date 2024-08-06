"use client";
import Image from "next/image";
import styles from "./index.module.css";
// import LogoSvg from "@/assets/home/header_logo.svg";
import { HomeConfigs } from "@/constants";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { HomeConfig } from "@/constants/game.type";

export default function Banner() {
  const router = useRouter();
  const [active, setActive] = useState<HomeConfig>(HomeConfigs[0]);
  return (
    <div className={styles.heroPart}>
      <div className={styles.heroPartContent}>
        <div className={styles.heroPartLeft}>
          <img src={active.bigPic} className={styles.heroLeftImg} />
        </div>
        <div className={styles.heroPartRight}>
          <div className={styles.info}>
            <div className={styles.infoTitle}>{active.name}</div>
            <div className={styles.infoDesc}>{active.introduction}</div>
          </div>
          <ul className={styles.heroList}>
            {HomeConfigs.map((item, index: number) => {
              return (
                <li
                  key={index}
                  className={styles.heroItem}
                  onMouseEnter={() => setActive(item)}
                  onClick={() => router.push(`/characterDetail?id=${item.id}`)}
                >
                  <div className={styles.bg} />
                  <img src={item.pic} />
                  <div className={styles.name}>{item.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
