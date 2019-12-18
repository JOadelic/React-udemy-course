import React from 'react';
import Counter from './components/Counter.js';
import Indecision from './components/Indecision.js';
import Toggle from './components/Toggle.js';

import './App.css';

export default function App() {

  return (
  <div>
    <Toggle />
    <Indecision />
    <Counter />
  </div>
  )
}
