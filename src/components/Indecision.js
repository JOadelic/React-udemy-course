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
      e.target.elements.option.value = "";
    }
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
      <div>
        The monkey bars were always my favourite thing to play on at the park.
        What about you? What things would your dream park include?
      </div>
      <p>{options.length > 0 ? `Your dream park would include: ` : `Add items to your dream park here`}</p>
      <ol>
        {options.map(option => (<li key={option}>{option}</li>))}
      </ol>
      <form onSubmit={formSubmit}>
        <input type='text' name='option' value={input} onChange={handleInputChange}/>
        <button>Add Item</button>
        {!input ? <h3>Input Required</h3> : <h3>Valid Input</h3>}
      </form>
      <button disabled={options.length < 1 ? true : false} onClick={choose}>Select Random Option</button>
      <button onClick={clearOptions}>Clear</button>
    </div>
  )
}