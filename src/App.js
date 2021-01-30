import React from 'react';
import DisplayJSX from './challenges/DisplayJSX';
import DisplayJSXStyled from './challenges/DisplayJSX_styledcomp';
import LoopArray from './challenges/LoopArray';
import UpdateForm from './challenges/UpdateForm';
import Header from './components/Header';
import ShowAlert from './challenges/ShowAlert';
import AddCalc from './challenges/AddCalc';
import DomEvents from './challenges/DomEvents';
import FetchAPI from './challenges/FetchAPI';
import CreateComp from './challenges/CreateComp';

function App() {
  return (
    <div className="container">
      <Header title="🏆 10 Days of React Challenge 🏆" />
        {/* <DisplayJSX /> */}
        {/* <DisplayJSXStyled /> */}
        {/* <LoopArray /> */}
        {/* <UpdateForm /> */}
        {/* <ShowAlert /> */}
        {/* <AddCalc /> */}
        {/* <DomEvents /> */}
        {/* <FetchAPI /> */}
        <CreateComp />
    </div>
  );
}

export default App;
