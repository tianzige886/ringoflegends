"use client";
import styles from "./index.module.css";
import Banner from "./components/banner";
import ShortIntro from "./components/shortIntro";
import Personality from "@/app/characterDetail/components/personality";
import Heros from "./components/heros";
import { useSearchParams } from "next/navigation";
import { getGame } from "@/services/game";
import { useEffect, useState } from "react";
import { Game } from "@/constants/game.type";
import { Suspense } from "react";

export default function CharacterDetail() {
  const searchParams: any = useSearchParams();
  const [game, setGame] = useState<Game>();

  const getData = async (id: string | number) => {
    try {
      const res: any = await getGame({ id });
      if (res?.code === 0) {
        setGame(res?.data);
      }
    } catch (e: any) {}
  };

  useEffect(() => {
    const id: any = searchParams?.get("id");
    getData(id);
  }, []);

  return (
    <Suspense fallback={""}>
      <main className={styles.main}>
        {game && <Banner data={game} />}
        <div className={styles.bg}>
          {game && <ShortIntro data={game} />}
          {game && <Personality data={game} />}
          <Heros />
        </div>
      </main>
    </Suspense>
  );
}
