"use client";
// import Image from "next/image";
import styles from "./index.module.css";
// import TestHead from "@/assets/home/testHead.svg";
import type { Skills } from "@/constants/game.type";

export default function Skills(props: { data: Skills[] }) {
  const { data } = props;
  return (
    <div className={styles.abilitysParts}>
      <div className={styles.abilityTitles}>
        <ul className={styles.list}>
          <li className={styles.col1}>Name</li>
          <li className={styles.col2}>Information</li>
          <li className={styles.col3}>unlock</li>
          <li className={styles.col4}>Max</li>
        </ul>
      </div>
      <div className={styles.abilityContent}>
        {data?.map((item, index: number) => {
          return (
            <div className={styles.row}>
              <ul className={styles.list}>
                <li className={styles.col1}>{item?.name}</li>
                <li className={styles.col2}>{item?.information}</li>
                <li className={styles.col3}>{item?.unlock}</li>
                <li className={styles.col4}>{item?.max}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
