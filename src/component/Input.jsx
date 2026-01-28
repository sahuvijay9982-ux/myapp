import React, { useState } from "react";

function Input() {

  
  const [name, setName] = useState("");

  const [item1, setItem1] = useState("");
  const [qty1, setQty1] = useState("");

  const [item2, setItem2] = useState("");
  const [qty2, setQty2] = useState("");

  const [item3, setItem3] = useState("");
  const [qty3, setQty3] = useState("");
  

  return (
    <>
      <div className="w-50 border border-1 border-secondary mt-2 ms2 div50">
        <h1
          className="text-center bg-dark text-uppercase text-white"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        >
          Invoice
        </h1>

        {/* Name */}
        <label className="form-label mx-5 mt-3 text-dark">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="form-control mx-5 w-75"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Item 1 */}
        <label className="form-label mx-5 mt-3 text-dark">Item 1</label>
        <input
          type="text"
          placeholder="Enter item 1 name"
          className="form-control mx-5 w-75"
          value={item1}
          onChange={(e) => setItem1(e.target.value)}
        />

        <label className="form-label mx-5 mt-3 text-dark">
          Quantity of Item 1
        </label>
        <input
          type="text"
          placeholder="Enter quantity"
          className="form-control mx-5 w-75"
          value={qty1}
          onChange={(e) => setQty1(e.target.value)}
        />

        {/* Item 2 */}
        <label className="form-label mx-5 mt-3 text-dark">Item 2</label>
        <input
          type="text"
          placeholder="Enter item 2 name"
          className="form-control mx-5 w-75"
          value={item2}
          onChange={(e) => setItem2(e.target.value)}
        />

        <label className="form-label mx-5 mt-3 text-dark">
          Quantity of Item 2
        </label>
        <input
          type="text"
          placeholder="Enter quantity"
          className="form-control mx-5 w-75"
          value={qty2}
          onChange={(e) => setQty2(e.target.value)}
        />

        {/* Item 3 */}
        <label className="form-label mx-5 mt-3 text-dark">Item 3</label>
        <input
          type="text"
          placeholder="Enter item 3 name"
          className="form-control mx-5 w-75"
          value={item3}
          onChange={(e) => setItem3(e.target.value)}
        />

        <label className="form-label mx-5 mt-3 text-dark">
          Quantity of Item 3
        </label>
        <input
          type="text"
          placeholder="Enter quantity"
          className="form-control mx-5 w-75"
          value={qty3}
          onChange={(e) => setQty3(e.target.value)}
        />
      </div>

      {/* Header */}
      <div className="text-center bg-dark text-white py-2 mb-3">
        <h3 className="m-0">BILL VOUCHER</h3>
      </div>

      {/* Bill Info */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <strong>Name:</strong>{" "}
          <span className="text-capitalize">
            {/* {name || "__________"} */}
          </span>
        </div>

        <div>
          <div>
            <strong>Date:</strong>
          </div>
          <div>
            <strong>Bill No:</strong>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>No</th>
            <th>Item Description</th>
            <th>Qty</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>
              {/* {itemDes1 || "-"} */}
            </td>
            <td>
              {/* {itemQty1} */}
            </td>
            <td>
              {/* {itemPrice1} */}
            </td>
            <td>
              {/* {itemQty1 * itemPrice1} */}
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>
              {/* {itemDes2 || "-"} */}
            </td>
            <td>
              {/* {itemQty2} */}

            </td>
            <td>
              {/* {itemPrice2} */}

            </td>
            <td>
              {/* {itemQty2 * itemPrice2} */}
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>
              {/* {itemDes3 || "-"} */}
            </td>
            <td>
              {/* {itemQty3} */}
            </td>
            <td>
              {/* {itemPrice3} */}
            </td>
            <td>
              {/* {itemQty3 * itemPrice3} */}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Input;