import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../Redux/InventoryRedux";

const ItemsUi = ({ data, edit, form }) => {
  const dispatcher = useDispatch();
  const [displayForm, setDisplay] = useState(false);
  const [editYes, setEdit] = useState(false);
  function UpdateInventoryForm(event) {}
  console.log(edit);
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
          <span className="font-medium text-xl">Category : </span>
          {data.category}
        </p>
        <button
          onClick={() => dispatcher(deleteItem(data._id))}
          className="bg-red-500 p-2 text-white rounded text-lg "
        >
          Delete
        </button>
        <button
          onClick={() => {
            edit(data);
            form();
          }}
        >
          Edit
        </button>
      </li>
    </>
  );
};

export default ItemsUi;
