import React, {useState} from 'react';

const UpdateForm = () => {
    // Create state variables here
  const [name, setName] = useState("Jon");
  const [age, setAge] = useState("38");
  const [dataInput, setDataInput] = useState({
    name: '', age: ''
  })

  // multiple events
  const handleChange = event => {
    const value = event.target.value;
    setDataInput({
      ...dataInput,
      [event.target.name]: value
    })
  }

  return (
    <div>
      <h1>Update Data from an input</h1>
      <form>
        <div className="form-group my-4">
          <label htmlFor="name"> Name: </label>
          {/* <input type="text" class="form-control" name="name" onChange={e => setName(e.target.value)} /> */}
          <input type="text" class="form-control" name="name" value={dataInput.name} onChange={handleChange} />
        </div>

        <div className="form-group my-4">
          <label htmlFor="age"> Age: </label>
          {/* <input type="number" class="form-control" name="age" onChange={e => setAge(e.target.value)} /> */}
          <input type="number" class="form-control" name="age" value={dataInput.age} onChange={handleChange} />
        </div>
      </form>
      <p> Name: {dataInput.name} </p>
      <p> Age: {dataInput.age} </p>
    </div>
  );
}

export default UpdateForm;
