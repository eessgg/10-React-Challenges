import React from 'react';
import DisplayJSX from './challenges/DisplayJSX';
import DisplayJSXStyled from './challenges/DisplayJSX_styledcomp';

function App() {
  return (
    <div className="container">
      <div className="row">
        <h1>10 Days of React Challenge 🏆</h1>
      </div>
      <div className="row">
        {/* <DisplayJSX /> */}
        <DisplayJSXStyled />
      </div>
    </div>
  );
}

export default App;
