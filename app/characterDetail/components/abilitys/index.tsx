"use client";
// import Image from "next/image";
import styles from "./index.module.css";
// import TestHead from "@/assets/home/testHead.svg";
import type { Abilities } from "@/constants/game.type";

export default function Abilitys(props: { data: Abilities[] }) {
  const { data } = props;
  return (
    <div className={styles.abilitysParts}>
      <div className={styles.abilityTitles}>
        <ul className={styles.list}>
          <li className={styles.col1}>Name</li>
          <li className={styles.col2}>Information</li>
          <li className={styles.col3}>Cooldown</li>
          <li className={styles.col4}>Max</li>
        </ul>
      </div>
      <div className={styles.abilityContent}>
        {data?.map((item, index: number) => {
          return (
            <div className={styles.row} key={index}>
              <ul className={styles.list}>
                <li className={styles.col1}>
                  <div className={styles.head}>
                    <img src={item?.icon ?? ""} />
                  </div>
                  <div className={styles.name}>{item?.name}</div>
                </li>
                <li className={styles.col2}>{item?.information}</li>
                <li className={styles.col3}>{item?.coolDown}</li>
                <li className={styles.col4}>{item?.max}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
