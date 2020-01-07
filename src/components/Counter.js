import React, { useState } from 'react';
import './Counter.scss'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='container'>
      <div>
        <h2>"why fit in when you were born to stand out?" -dr. suess</h2>
        <h3>it goes without saying this playground is for all, click to increase the peace!</h3>
      </div>
        <button className='peaceBtn' onClick={() => setCount(count + 1)}>+1</button>
        <button className='peaceBtn' onClick={() => setCount(count - 1)}>-1</button>
        <button className='peaceBtn' onClick={() => setCount(0)}>Reset</button>
      <div className='rainbow'>
        {count > 0 ? <div></div> : ""}
        {count > 1 ? <div></div> : ""}
        {count > 2 ? <div></div> : ""}
        {count > 3 ? <div></div> : ""}
        {count > 4 ? <div></div> : ""}
        {count > 5 ? <div></div> : ""}
        {count > 6 ? <div></div> : ""}
      </div>
    </div>
  )
}