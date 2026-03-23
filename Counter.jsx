import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incre = () => {
    setCount(count + 1);
  };

  const decre = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1>COUNTER-APP</h1>
      
      <br />
      <p style={{fontSize:'50px'}}>{count}</p>
      <br />

      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;