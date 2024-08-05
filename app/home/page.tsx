"use client";
import styles from "./index.module.css";
import Banner from "./components/banner";
import Lunbo from "./components/lunbo";
import GameStory from "./components/gameStory";
import Heros from "./components/heros";
import FeatureNews from "@/app/home/components/featureNews";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.bg}>
        <GameStory />
        <Lunbo />
        <Heros />
        <FeatureNews />
      </div>
    </main>
  );
}
