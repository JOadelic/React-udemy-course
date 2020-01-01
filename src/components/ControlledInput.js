import React, { useState } from 'react';
import './ControlledInput.scss'

export default function ControlledInput() {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }
  
  return (
    <div className="container">
      <h1>Controlled Input</h1>
      {!input ? <h3>Input Required</h3> : <h3>Valid Input</h3>}
      <input value={input} type='text' onChange={handleInputChange} />
    </div>
  )
}