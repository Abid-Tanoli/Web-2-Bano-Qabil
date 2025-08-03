import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };
  const dicrement = () => {
    if (num <= 0) {
      alert("You can't decrement below 0");
      return;
    }
    setNum(num - 1);
  };
  const reset = () => {
    setNum(0);
  };

  const incrementFive = () => {
    setNum(num + 5);
  };
  const decrementFive = () => {
    if (num - 5 < 0) {
      reset();
      alert("You can't decrement below 0");
      return;
    }
    setNum(num - 5);
  };

  return (
    <>
      <div className="container">
        <h2>Counter App</h2>
        <h1>Counter: {num}</h1>
        <p>Click the buttons to change the counter value.</p>
        <p>Note: You cannot decrement below 0.</p>
        <hr />
        <button onClick={increment}>Increment</button>
        <button onClick={dicrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incrementFive}>Increment + 5</button>
        <button onClick={decrementFive}>Decrement + 5</button>
      </div>
    </>
  );
}

export default App;
