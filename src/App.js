import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let appObject = {
    title: "Practicing React",
    subtitle: "Back to Basics",
    options: ['Do something', ' Do nothing.']
  }

  let user = {
    name: "Jordan Owens",
    location: "Niagara Falls",
    favMovie: "Indiana Jones (Raiders Of The Lost Ark)",
    age: "33"
  }

  function renderSubtitle(title) {
    if (title) {
        return <p>{appObject.subtitle}</p>
    }
  }

  function getLocation(location) {
    if (location) {
      return <p>Location: {user.location}</p>;
    }
  }
  return (
    <>
      <div>
        <p><b>{appObject.title}</b></p>
        {renderSubtitle(appObject.title)}
        {appObject.options.length > 0 ? `These are your options: ${appObject.options}` : "no options available"}
      </div>

      <div>
        <h1>{user.name ? user.name : "Annoymous"}</h1>
        <p>Favourite Movie: {user.favMovie}</p>
        <p>{user.age && user.age > 17 ? `Age: ${user.age}` : "Not Old Enough!"}</p>
        {getLocation(user.location)}
      </div>
    </>
  );
}

export default App;
