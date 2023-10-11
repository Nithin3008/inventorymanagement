import React from "react";

const SalesUi = ({ data }) => {
  return (
    <>
      <li className="border-4 list-none w-2/4 m-auto space-y-2 p-2 my-2">
        <p>
          <span className="font-medium text-xl">Item Name : </span>
          {data.name}
        </p>
        <p>
          <span className="font-medium text-xl">Item quantity : </span>
          {data.quantity}
        </p>
        <p>
          <span className="font-medium text-xl">Item Price : </span>
          {data.price}
        </p>
        <p>
          <span className="font-medium text-xl">Total Amount : </span>
          {data.amount}
        </p>
        <p>
          <span className="font-medium text-xl">Date Recorded : </span>
          {data.date}
        </p>
        {/* <button
    onClick={() => dispatcher(deleteItem(data._id))}
    className="bg-red-500 p-2 text-white rounded text-lg "
  >
    Delete
  </button> */}
      </li>
    </>
  );
};

export default SalesUi;
