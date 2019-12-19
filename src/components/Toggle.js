import React, { useState } from 'react';

export default function Toggle(props) {
  const [visible, setVisible] = useState(false);

  function appInfo() {
    if (visible) {
      setVisible(false);
      } else {
        setVisible(true)
    }
  }
  
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <button onClick={appInfo}>{visible ? 'Close Information' : 'Information'}</button>
      {visible ? <p>This app is a showcase of my skills in React. It is comprised
                    of some simple components that manipulate state/data and I also
                    have some fun with styling and design.
                
      </p> : ""}
    </div>
  )
}