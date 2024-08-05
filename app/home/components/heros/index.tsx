"use client";
import Image from "next/image";
import styles from "./index.module.css";
import LogoSvg from "@/assets/home/header_logo.svg";

import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  return (
    <div className={styles.heroPart}>
      <div className={styles.heroPartContent}>
        <div className={styles.heroPartLeft}>
          <img className={styles.logo} src={LogoSvg} />
          <img src={LogoSvg} className={styles.heroLeftImg} />
          <div className={styles.info}>
            <div className={styles.infoTitle}>VEXX</div>
            <div className={styles.infoDesc}>
              Vexx is very quick tempered. She’d rather fight you than get to
              know you.
            </div>
          </div>
        </div>
        <div className={styles.heroPartRight}>
          <ul className={styles.heroList}>
            <li
              className={styles.heroItem}
              onClick={() => router.push(`/characterDetail?id=${1}`)}
            >
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li
              className={styles.heroItem}
              onClick={() => router.push(`/characterDetail?id=${1}`)}
            >
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li
              className={styles.heroItem}
              onClick={() => router.push(`/characterDetail?id=${1}`)}
            >
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li
              className={styles.heroItem}
              onClick={() => router.push(`/characterDetail?id=${1}`)}
            >
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li
              className={styles.heroItem}
              onClick={() => router.push(`/characterDetail?id=${1}`)}
            >
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li
              className={styles.heroItem}
              onClick={() => router.push(`/characterDetail?id=${1}`)}
            >
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
            <li
              className={styles.heroItem}
              onClick={() => router.push(`/characterDetail?id=${1}`)}
            >
              <div className={styles.bg} />
              <img src={LogoSvg} />
              <div className={styles.name}>test</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
