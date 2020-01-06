import React, { useState } from 'react';
import './Indecision.scss';

export default function Indecision(props) {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState('');

  
  const formSubmit = (e) => {
    e.preventDefault();
    
    let option = e.target.elements.option.value;
    
    if (option) {
      setOptions((prev) => [...prev, option])
    }
    e.target.value = ""
    console.log(options)
  }

  const clearOptions = () => {
    setOptions([])
  }

  const choose = () => {
    let chosenOption = Math.floor(Math.random() * options.length)
    alert(`Select option ${chosenOption + 1}`)
  }

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className='options-container'>
      <div className="indecisionDiv">
        <p className="question">{options.length > 0 ? `Your dream park would include: ` : `Add items to your dream park here:`}</p>
        <form onSubmit={formSubmit}>
          <input className="formInput" type='text' name='option' value={input} onChange={handleInputChange}/>
          <button className="btn">Add Item</button>
          {!input ? "" : <div className='valid'>Valid Input</div>}
        </form>
        <ol>
          {options.map(option => (<li key={option}>{option}</li>))}
        </ol>
        {/* <button className="btn" disabled={options.length < 1 ? true : false} onClick={choose}>Select Random Option</button> */}
        <button className="btn" onClick={clearOptions}>Clear list</button>
      </div>
    </div>
  )
}