import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Counter: {count}</h1>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setCount(count - 1)}>-1</button>
    <button onClick={() => setCount(0)}>Reset</button>
  </div>
  )
}
export default App;
