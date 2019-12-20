import React, { useState } from 'react';
import './Title.scss';

export default function Title(props) {
  const [visible, setVisible] = useState(false);

  function appInfo() {
    if (visible) {
      setVisible(false);
      } else {
        setVisible(true)
    }
  }
  
  return (
    <div className="header">
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
      <button onClick={appInfo} className="btn">{visible ? 'Close Information' : 'Information'}</button>
      {visible ? <p className='info'>This app is a showcase of my skills in React. It is comprised
                    of some simple components that manipulate state/data and I also
                    have some fun with styling and design.
                
      </p> : ""}
    </div>
  )
}