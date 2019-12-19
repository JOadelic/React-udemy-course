import React, { useState } from 'react';

export default function Indecision(props) {
  const [options, setOptions] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();

    let option = e.target.elements.option.value;
    
    if (option) {
      setOptions((prev) => [...prev, option])
      e.target.elements.option.value = "";
    }
  }

  const clearOptions = () => {
    setOptions([])
  }

  const choose = () => {
    let chosenOption = Math.floor(Math.random() * options.length)
    alert(`Select option ${chosenOption + 1}`)
  }

  return (
    <div>
      <p>{options.length > 0 ? `Here are your options: ` : `Add a few options to help you make a decision`}</p>
      <ol>
        {options.map(option => (<li key={option}>{option}</li>))}
      </ol>
      <form onSubmit={formSubmit}>
        <input type='text' name='option'/>
        <button>Add option</button>
      </form>
      <button disabled={options.length < 1 ? true : false} onClick={choose}>Select Random Option</button>
      <button onClick={clearOptions}>Clear</button>
    </div>
  )
}