import React from 'react';
import Nav from './components/Nav.js'
import Counter from './components/Counter.js';
import Indecision from './components/Indecision.js';
import Title from './components/Title.js';
// import Gallery from './components/Gallery.js';
import ControlledInput from './components/ControlledInput.js';
import './App.scss';


export default function App() {
  let title = "Jordan's React Playground";
  let subtitle = 'Crafting React skills';

  return (
  <div className="app">
    <Nav />
    <Title title={title} subtitle={subtitle}/>
    {/* <ControlledInput /> */}
    <Indecision />
    <Counter />
    {/* <Gallery /> */}
  </div>
  )
}
