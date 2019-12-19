import React from 'react';
import Counter from './components/Counter.js';
import Indecision from './components/Indecision.js';
import Toggle from './components/Toggle.js';
import CssFun from './components/CssFun.js';

import './App.css';

export default function App() {
  let title = 'React Playground';
  let subtitle = 'Practicing React skills';
  
  return (
  <div>
    <Toggle title={title} subtitle={subtitle}/>
    <Indecision />
    <Counter />
    <CssFun />
  </div>
  )
}
