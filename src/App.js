import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [options, setOptions] = useState([]);

  const app = {
    title: "Indecision App",
    subtitle: "Practicing React", 
  };

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
    <div>
      <h1>{app.title}</h1>
      <h2>{app.subtitle}</h2>
      <p>{app.subtitle && options.length > 0 ? `These are your options: ` : `There are no options`}</p>
      <ol>
        {options.map(option => (<li key={option}>{option}</li>))}
      </ol>
      <form onSubmit={formSubmit}>
        <input type='text' name='option'/>
        <button>Add option</button>
      </form>
      <button onClick={choose}>Select Random Option</button>
      <button onClick={clearOptions}>Clear</button>
    </div>

    <h1>Counter: {count}</h1>
    <button onClick={() => setCount(count + 1)}>+1</button>
    <button onClick={() => setCount(count - 1)}>-1</button>
    <button onClick={() => setCount(0)}>Reset</button>
  </div>
  )
}
export default App;
