"use client";

import useCounter from "@/hooks/useCounter";
import styles from "./page.module.css";

export default function Home() {

  // amogus

  const {count, increment, decrement, bigcrement} = useCounter(5)

  return (
    // div className={styles.page}
    <div>
      <p>Tæller: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={bigcrement}>BIG</button>
      <p className={styles.page}>Raven gets scammed by McDonald's - The Movie</p>
    </div>

  );

}
