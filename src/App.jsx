import { useEffect, useEffectEvent, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handlelog = useEffectEvent(() => console.log(`count:${count}`));

  useEffect(() => {
    const id = setInterval(() => handlelog(), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <p>count:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default App;
