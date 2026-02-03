import React, { useState } from "react";

const MyForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");
  const [terms, setTerms] = useState(false);

  const [fnameErr, setFnameErr] = useState("");
  const [lnameErr, setLnameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [confPassErr, setConfPassErr] = useState("");
  const [addErr, setAddErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [genErr, setGenErr] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [dobErr, setDobErr] = useState("");
  const [termErr, setTermErr] = useState("");

  const handleSubmit = () => {
    let isValid = true;

    if (fname.length < 3) {
      setFnameErr("First name minimum 3 characters");
      isValid = false;
    } else setFnameErr("");

    if (lname.length < 3) {
      setLnameErr("Last name minimum 3 characters");
      isValid = false;
    } else setLnameErr("");

    if (address.length < 10) {
      setAddErr("Address minimum 10 characters");
      isValid = false;
    } else setAddErr("");

    if (city === "") {
      setCityErr("Select city");
      isValid = false;
    } else setCityErr("");

    if (contact.length < 10) {
      setContactErr("Enter valid contact number");
      isValid = false;
    } else setContactErr("");

    if (email === "") {
      setEmailErr("Email required");
      isValid = false;
    } else setEmailErr("");

    if (password.length < 8) {
      setPassErr("Password minimum 8 characters");
      isValid = false;
    } else setPassErr("");

    if (password !== confPass) {
      setConfPassErr("Password not matched");
      isValid = false;
    } else setConfPassErr("");

    if (dob === "") {
      setDobErr("Select date of birth");
      isValid = false;
    } else setDobErr("");

    if (gender === "") {
      setGenErr("Select gender");
      isValid = false;
    } else setGenErr("");

    if (!terms) {
      setTermErr("Accept terms & conditions");
      isValid = false;
    } else setTermErr("");

    if (isValid) {
      alert("Form Submitted Successfully ✅");
    }
  };

  return (
      <form
     className="p-5 mt-5 mainDiv">
      <h2>FORM</h2>
      <label>First Name</label>
      <input
        type="text"
        placeholder="First Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <p>{fnameErr}</p>
      <label>Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <p>{lnameErr}</p>
      <label>Address</label>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <p>{addErr}</p>
      <label>City</label>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">Select City</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Indore">Indore</option>
        <option value="Pune">Pune</option>
      </select>
      <p>{cityErr}</p>
      <label>Contact Number</label>
      <input
        type="text"
        placeholder="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <p>{contactErr}</p>
      <label>Email Address</label>
      <input
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{emailErr}</p>
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{passErr}</p>
      <label>Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        value={confPass}
        onChange={(e) => setConfPass(e.target.value)}
      />
      <p>{confPassErr}</p>
      <label>Date of Birth</label>
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <p>{dobErr}</p>
      <label>Gender</label>
      <br />
      <input
        type="radio"
        name="gender"
        value="male"
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        onChange={(e) => setGender(e.target.value)}
      />{" "}
      Female
      <p>{genErr}</p>
      <input type="checkbox" onChange={(e) => setTerms(e.target.checked)} /> I
      agree to Terms & Conditions
      <p>{termErr}</p>
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
        
    </form>
  );
};

export default MyForm;
