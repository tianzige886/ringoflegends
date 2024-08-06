"use client";
import Image from "next/image";
import styles from "./index.module.css";
// import PersonalityTitle from "@/assets/home/personality_title.svg";
import { TabsConfig } from "@/constants/index";
import { useState } from "react";
import Abilitys from "@/app/characterDetail/components/abilitys";
import Items from "@/app/characterDetail/components/items";
import Skills from "@/app/characterDetail/components/skills";
import Outfits from "@/app/characterDetail/components/outfits";
import { Game } from "@/constants/game.type";

export default function Personality(props: { data: Game }) {
  const { data } = props;
  const [activeIndex, setActiveIndex] = useState<number>(TabsConfig[0].value);

  return (
    <div className={styles.personalityPart}>
      <div className={styles.title}>
        <img src={"/assets/home/personality_title.svg"} />
      </div>
      <div className={styles.description}>{data?.personality}</div>
      <div className={styles.tabs}>
        <div className={styles.tabTitles}>
          <ul className={styles.list}>
            {TabsConfig.map((item) => {
              return (
                <li
                  key={item?.value}
                  onClick={() => setActiveIndex(item?.value)}
                  className={`${styles.item} ${
                    activeIndex === item?.value ? styles.activeItem : ""
                  }`}
                >
                  {item?.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.tabContent}>
          {activeIndex === TabsConfig[0].value && (
            <Abilitys data={data?.abilities ?? []} />
          )}
          {activeIndex === TabsConfig[1].value && (
            <Skills data={data?.skills ?? []} />
          )}
          {activeIndex === TabsConfig[2].value && (
            <Items data={data?.items ?? []} />
          )}
          {activeIndex === TabsConfig[3].value && (
            <Outfits data={data?.outfits ?? []} />
          )}
        </div>
      </div>
    </div>
  );
}
