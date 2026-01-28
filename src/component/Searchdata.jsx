import React, { useState } from "react";

function Searchdata() {
  // Original data
  let arr = [
    "manvendra",
    "pawan",
    "gaurav",
    "sandeep",
    "kamlesh",
    "harchand",
    "mohit",
    "vijay",
    "sameer",
    "rishiraj",
    "ritik",
    "raghav",
    "kushagra",
    "ajay",
    "shurveeer",
  ];

  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // input change
  function handleChange(e) {
    setText(e.target.value);
    let newArr = arr.filter((e1) =>
      e1.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setFilteredData(newArr);
  }

  // button click search
  function handleSearch() {
    let newArr = arr.filter((e) =>
      e.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(newArr);
  }

  return (
    <>
      <div style={{ minHeight: "100vh" }} className="m-5">
        <h1 className="bg-dark py-1 text-center text-white">
          Search Functionality
        </h1>

        <div className="border border-secondary p-4">
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Search your data"
            value={text}
          />

          <button
            className="btn bg-dark text-white btn-sm px-5 d-block m-auto my-5"
            onClick={handleSearch}
          >
            Search Data
          </button>
        </div>

        <div className="d-flex justify-content-between mt-4">
          {/* Original Data */}
          <div>
            <h2>Original Data</h2>
            {arr.map((e, i) => (
              <h5 key={i}>{e}</h5>
            ))}
          </div>

          {/* Filtered Data */}
          <div>
            <h2>Filtered Data</h2>
            {filteredData.map((e, i) => (
              <h5 key={i}>{e}</h5>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchdata;
