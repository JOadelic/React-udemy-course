import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let appObject = {
    title: "Practicing React",
    subtitle: "Back to Basics"
  }

  let user = {
    name: "Jordan Owens",
    location: "Niagara Falls",
    favMovie: "Indiana Jones (Raiders Of The Lost Ark)",
    age: "33"
  }
  return (
    <>
      <div>
        <p><b>{appObject.title}</b></p>
        <p>{appObject.subtitle}</p>
      </div>

      <div>
        <h1>{user.name}</h1>
        <p>Location: {user.location}</p>
        <p>Age: {user.age}</p>
        <p>Favourite Movie: {user.favMovie}</p>
      </div>
    </>
  );
}

export default App;
