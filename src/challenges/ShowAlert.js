import React, { useState, useEffect } from 'react';
import './data/users-data'
import './styles/ShowAlert.css'

const ShowAlert = () => {
  const [words, setWords] = useState('')

  useEffect(() => {
    if(words === 'my way') {
      alert("Correct. You can pass.")
    }
  }, [words])

  return (
    <div className="alert-box">
      <h2>The Challenge: Show Alert when Typing</h2>
      <form className="form m-3"> 
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={words} onChange={(e => setWords(e.target.value))} />
      </form> 
      {words}
    </div>
  );
}

export default ShowAlert;
