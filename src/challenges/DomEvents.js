import React, {useState} from 'react';
import './styles/DomEvents.css'

const DomEvents = () => {
  const [xposition, setXposition] = useState(0);

  const moveBox  = () => {
    setXposition(xposition + 50)
  }

  return (
    <div>
      <h1>The Challenge: Move a Box Up</h1>

      <div className="row">
        <button 
          className="btn btn-primary"
          onClick={moveBox}> Move the box Up
        </button>

        <div className="box"
          style={{transform: `translateX(${xposition}px)`}}
        >
          sa
        </div>

      </div>
    </div>
  );
}

export default DomEvents;
