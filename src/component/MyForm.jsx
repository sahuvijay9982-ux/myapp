import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (name.length < 2) {
      setNameError("Name must be at least 2 characters long");
      isValid = false;
    } else setNameError("");

    if (email.length < 7) {
      setEmailError("Email length must be at least 7 characters");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else setEmailError("");

    if (isValid) {
      alert("Form Submitted Successfully ✅");
      console.log(name, email);
    }
  };

  return (
    <div className="my-3">
      <h1 className="bg-dark text-white text-center text-uppercase mb-5">
        Form Validation
      </h1>{" "}
      <form onSubmit={handleSubmit}>
        <div className="p-5">
          <label>Name :</label>
          <input
            className="form-control my-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="text-danger">{nameError}</p>}

          <label>Email :</label>
          <input
            className="form-control my-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-danger">{emailError}</p>}

          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
