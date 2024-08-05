"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { Game } from "@/constants/game.type";

export default function Banner(props: { data: Game }) {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.heroName}>{data?.name}</div>
        <img
          width={301}
          height={302}
          className={styles.heroImage}
          src={data?.pic ?? ""}
        />
      </div>
    </div>
  );
}
