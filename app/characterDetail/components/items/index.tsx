"use client";
import Image from "next/image";
import styles from "./index.module.css";
// import TestHead from "@/assets/home/testHead.svg";
import type { Items } from "@/constants/game.type";

export default function Items(props: { data: Items[] }) {
  const { data } = props;
  return (
    <div className={styles.abilitysParts}>
      <div className={styles.abilityTitles}>
        <ul className={styles.list}>
          <li className={styles.col1}>Name</li>
          <li className={styles.col2}>bonus</li>
          <li className={styles.col3}>normal</li>
          <li className={styles.col4}>scarce</li>
          <li className={styles.col5}>rare</li>
          <li className={styles.col6}>epic</li>
          <li className={styles.col7}>legendary</li>
          <li className={styles.col8}>mythical</li>
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
                <li className={styles.col2}>
                  {item?.bonus.map((bonu) => {
                    return <span>{bonu}</span>;
                  })}
                </li>
                <li className={styles.col3}>
                  {item?.normal.map((normal) => {
                    return <span>{normal}</span>;
                  })}
                </li>
                <li className={styles.col4}>
                  {item?.scarce.map((scarce) => {
                    return <span>{scarce}</span>;
                  })}
                </li>
                <li className={styles.col5}>
                  {item?.rare.map((rare) => {
                    return <span>{rare}</span>;
                  })}
                </li>
                <li className={styles.col6}>
                  {item?.epic.map((epic) => {
                    return <span>{epic}</span>;
                  })}
                </li>
                <li className={styles.col7}>
                  {item?.legendary.map((legendary) => {
                    return <span>{legendary}</span>;
                  })}
                </li>
                <li className={styles.col8}>
                  {item?.mythical.map((mythical) => {
                    return <span>{mythical}</span>;
                  })}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
