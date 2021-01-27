import React from 'react';
import './styles/LoopArray.css'
import data from './data/users-data.js';

const LoopArray = () => {
  return (
    <div>
      <hr/>
      <h1>Loop Over an Array</h1>

      <ul className="userlist">
        {data.map(user => {
          return (
            <li>
              <h3> {user.name} </h3>
              <p> {user.location} </p>
              <p> {user.car} </p>
            </li>
          )
        })}
      </ul>
      <hr/>
    </div>
  );
}

export default LoopArray;
