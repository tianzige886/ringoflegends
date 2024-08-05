"use client";
// import Image from "next/image";
import styles from "./index.module.css";
// import TestHero from "@/assets/home/testHero.svg";
import type { Outfits } from "@/constants/game.type";

export default function Outfits(props: { data: Outfits[] }) {
  const { data } = props;
  return (
    <div className={styles.abilitysParts}>
      <div className={styles.abilityTitles}>
        <ul className={styles.list}>
          <li className={styles.col1} />
          <li className={styles.col2}>Name</li>
          <li className={styles.col3}>Requirements</li>
        </ul>
      </div>
      <div className={styles.abilityContent}>
        {data?.map((item, index: number) => {
          return (
            <div className={styles.row} key={index}>
              <ul className={styles.list}>
                <li className={styles.col1}>
                  <img src={item?.pic ?? ""} />
                </li>
                <li className={styles.col2}>{item?.name}</li>
                <li className={styles.col3}>{item?.requirements}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
