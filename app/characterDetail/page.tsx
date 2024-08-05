"use client";
import React, { useEffect, useState, Suspense } from "react";
import styles from "./index.module.css";
import Banner from "./components/banner";
import ShortIntro from "./components/shortIntro";
import Personality from "@/app/characterDetail/components/personality";
import Heros from "./components/heros";
import { useSearchParams } from "next/navigation";
import { getGame } from "@/services/game";
import { Game } from "@/constants/game.type";

function CharacterDetail() {
  const searchParams = useSearchParams();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      getData(id);
    }
  }, [searchParams]);

  const getData = async (id: string | number) => {
    try {
      const res: any = await getGame({ id });
      if (res?.code === 0) {
        setGame(res?.data);
      }
    } catch (e) {
      console.error("Failed to fetch game data", e);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  return (
    <main className={styles.main}>
      {game && <Banner data={game} />}
      <div className={styles.bg}>
        {game && <ShortIntro data={game} />}
        {game && <Personality data={game} />}
        <Heros />
      </div>
    </main>
  );
}

export default function CharacterDetailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CharacterDetail />
    </Suspense>
  );
}
