import React, { useState } from "react";
import Card from "./component/Card";
import objArr from "./component/data/cardData.json";

function Cards() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      {/* Search Box */}
      <div className="d-flex justify-content-end">
        <input
          type="text"
          placeholder="Search product"
          className="form-control w-250 m-4"
          style={{ borderRadius: "10px" }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ gap: "10px" }}
      >
        {objArr
          .filter((e) =>
            e.title.toLowerCase().includes(searchInput.toLowerCase()),
          )
          .map((element, index) => (
            <Card obj={element} key={index} />
          ))}
      </div>
    </>
  );
}

export default Cards;
