"use client";
import styles from "./index.module.css";
import Banner from "./components/banner";
import Heros from "./components/heros";

export default function Characters() {
  return (
    <main className={styles.main}>
      <Banner />
      <div className={styles.bg}>
        <Heros />
      </div>
    </main>
  );
}
