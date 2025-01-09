import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const bigcrement = () => setCount(count + 400000);


  return { count, increment, decrement, bigcrement };
}

export default useCounter;
