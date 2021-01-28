import React, {useState} from 'react';
import './styles/AddCalc.css'

const AddCalc = () => {
  const [numb1, setNumb1] = useState(0);
  const [numb2, setNumb2] = useState(0);
  const [total, setTotal] = useState(numb1 + numb2);

  const handleClick = (event) => {
    event.preventDefault()
    setTotal(numb1 + numb2)
  }

  return (
    <div>
      <h1>Adding Calculator</h1>
      <div className="calc">
        <form>
          <div className="form-group">
            <label htmlFor="n1" className="my-2">Number 1</label>
            <input type="number" className="form-control" name="n1" id="n1" value={numb1} onChange={(e) => setNumb1(+e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="n2" className="my-2">Number 2</label>
            <input type="number" className="form-control" name="n2" id="n2" value={numb2} onChange={(e) => setNumb2(+e.target.value)} />
          </div>

          <button type="submit" onClick={handleClick}> Calculate </button>
        </form>
        <h2 className="my-2"> Total: {total} </h2>
      </div>

    </div>
  );
}

export default AddCalc;

