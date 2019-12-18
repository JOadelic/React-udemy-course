import React, { useState } from 'react';

export default function Toggle() {
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
      <button onClick={appInfo}>{visible ? 'Close Information' : 'Information'}</button>
      {visible ? <p>This app is a showcase of my skills in React. It is comprised
                    of some simple components that manipulate state/data and I also
                    have some fun with styling and design.
                
      </p> : ""}
    </div>
  )
}