import React, { useState } from 'react'

const Sample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");



  const handleNameChange = (e) => {
    setName(e.target.value)
  };

  const handelEmailChange= (e) => {
    setEmail(e.target.value)
  };

  const handleSubmit = () => {
    if (name === "" || email === "") {
      alert("Name aur Email fill karo ❌");
    } else {
      alert("Form Submitted Successfully ✅");
      setName("");
      setEmail("");
    }
  }
  return (
    <>
      <div className="my-3">
        <h1 className="bg-dark text-white text-center text-uppercase mb-5">
          Form Validation
        </h1>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          id="name"
          className="form-control my-3"
        />

        <label htmlFor='email'>Email</label>
        
        <input type='text' placeholder='Enter Your Email' value={email} onChange={handelEmailChange} id='email' className='form-control my-3' />
        
        <button className='btn btn-sm btn-dark px-5 d-block m-auto mt-5' onClick={handleSubmit}>submit</button>

      </div>
    </>
  );
}

export default Sample
