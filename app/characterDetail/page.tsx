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

export default function CharacterDetail() {
  const searchParams = useSearchParams();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 添加加载状态

  const getData = async (id: string | number) => {
    try {
      const res: any = await getGame({ id });
      if (res?.code === 0) {
        setGame(res?.data);
      }
    } catch (e) {
      console.error("Failed to fetch game data", e); // 错误处理
    } finally {
      setLoading(false); // 确保在请求完成后设置加载状态
    }
  };

  useEffect(() => {
    const id = searchParams?.get("id");
    if (id) {
      getData(id);
    }
  }, [searchParams]);

  if (loading) {
    return <div>加载中...</div>; // 加载指示器
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
