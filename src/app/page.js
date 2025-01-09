"use client";

import useCounter from "@/hooks/useCounter";
import styles from "./page.module.css";
import useWindowWidth from "@/hooks/useWindowWIdth";
import useOnlineStatus from "@/hooks/useOnlineStatus";

export default function Home() {

  //* counter
  // const { count, increment, decrement, bigcrement } = useCounter(5);

  // const width = useWindowWidth();

  //* tells width, desktop or mobile
  // const breakPoint = 620;

  // return width < breakPoint ? console.log('mobile'): console.log('desktop');


  //* counter, again
  // return (
  //   <div>
  //     <p>Tæller: {count}</p>
  //     <button onClick={increment}>+1</button>
  //     <button onClick={decrement}>-1</button>
  //     <button onClick={bigcrement}>BIG</button>
  //     <p className={styles.page}>
  //       Raven gets scammed by McDonald's - The Movie
  //     </p>
  //   </div>
  // );

  //* online/offline
  const isOnline = useOnlineStatus();

  return <p>Du er {isOnline ? 'online' : 'offline, stoopid'}</p>

}
