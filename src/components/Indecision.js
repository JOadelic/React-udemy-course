import React, { useState } from 'react';
import './Indecision.scss';

export default function Indecision(props) {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState('');


  const formSubmit = (event) => {
    event.prventventDefault();

    let option = event.target.elements.option.value;
    
    if (option) {
      setOptions((prev) => [...prev, option])
      event.target.elements.option.value = "";
    }
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
      <p>{options.length > 0 ? `Here are your options: ` : `Add a few options to help you make a decision`}</p>
      <ol>
        {options.map(option => (<li key={option}>{option}</li>))}
      </ol>
      <form onSubmit={formSubmit}>
        <input type='text' name='option' value={input} onChange={handleInputChange}/>
        <button>Add option</button>
        {!input ? <h3>Input Required</h3> : <h3>Valid Input</h3>}
      </form>
      <button disabled={options.length < 1 ? true : false} onClick={choose}>Select Random Option</button>
      <button onClick={clearOptions}>Clear</button>
    </div>
  )
}