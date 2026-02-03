import React, { useState } from 'react'

const Regestration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  
  
  
  const handelFirstNameChange = () => {

}

  
  const handelLastNameChange = () => {
      // useState(e.target.value);

  }

  return (
    <>
      <div>
        <h1 className="bg-success text-white mt-3 text-center py-5">
          Regestration Form
        </h1>

        <div>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            id="fname"
            onChange={handelFirstNameChange}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            id="lname"
            onChange={handelLastNameChange}
          />
        </div>
        <button className="btn btn-sm btn-success px-5 d-block m-auto mt-5" >Submit</button>
      </div>
    </>
  );
}

export default Regestration
