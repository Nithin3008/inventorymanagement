import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInventory,
  setInventory,
  updateItem,
} from "../Redux/InventoryRedux";
import ItemsUi from "../components/ItemsUi";
const Inventory = () => {
  const [displayForm, setDisplay] = useState(false);
  const [displayForm1, setDisplay1] = useState(false);
  const dispatcher = useDispatch();
  const inventoryList = useSelector((state) => state.itemsReducer);
  console.log(inventoryList);
  function getInventoryForm(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
      category: event.target.category.value,
    };
    console.log(data);
    dispatcher(setInventory(data));
  }
  useEffect(() => {
    dispatcher(getInventory());
  }, [dispatcher]);
  function UpdateInventoryForm(event) {
    event.preventDefault();

    console.log(editData);
    dispatcher(updateItem(editData._id, editData));
    setDisplay1(!displayForm1);
  }
  function editForm() {
    setDisplay1(!displayForm1);
  }

  const [editData, setEditData] = useState({});
  function newEditData(data) {
    setEditData(data);
  }
  function editName(event) {
    const newName = { ...editData, name: event.target.value };
    setEditData(newName);
  }
  function editQuantity(event) {
    const newQuantity = { ...editData, quantity: event.target.value };
    setEditData(newQuantity);
  }
  function editPrice(event) {
    const newPrice = { ...editData, price: event.target.value };
    setEditData(newPrice);
  }
  return (
    <>
      <div
        style={{
          display: displayForm ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          onSubmit={(e) => {
            getInventoryForm(e);
            e.target.reset();
          }}
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
        >
          <label>Enter Name</label>
          <input
            className="border-2 border-gray-400"
            required
            id="name"
            type="text"
          ></input>
          <label>Enter Quantity Number</label>
          <input
            className="border-2 border-gray-400"
            required
            id="quantity"
            type="number"
          ></input>
          <label>Enter Price</label>
          <input
            className="border-2 border-gray-400"
            required
            id="price"
            type="number"
          ></input>
          <label>Enter Category</label>
          <input
            className="border-2 border-gray-400"
            required
            id="category"
            type="string"
          ></input>
          <button
            className="border-2 p-2 bg-blue-500 border-blue-500 rounded-md"
            type="submit"
          >
            Submit
          </button>
          <button
            className="border-2 p-2 bg-red-500 border-red-500 rounded-md"
            onClick={() => setDisplay(!displayForm)}
          >
            Cancel
          </button>
        </form>
      </div>
      <div
        style={{
          display: displayForm1 ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          onSubmit={(e) => {
            UpdateInventoryForm(e);
            e.target.reset();
          }}
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
        >
          <label>Enter Name</label>
          <input
            className="border-2 border-gray-400"
            required
            id="name"
            type="text"
            onChange={editName}
            value={editData.name}
          ></input>
          <label>Enter Quantity Number</label>
          <input
            className="border-2 border-gray-400"
            required
            id="quantity"
            type="number"
            value={editData.quantity}
            onChange={editQuantity}
          ></input>
          <label>Enter Price</label>
          <input
            className="border-2 border-gray-400"
            required
            id="price"
            type="number"
            value={editData.price}
            onChange={editPrice}
          ></input>

          <button
            className="border-2 p-2 bg-blue-500 border-blue-500 rounded-md"
            type="submit"
          >
            Submit
          </button>
          <button
            className="border-2 p-2 bg-red-500 border-red-500 rounded-md"
            onClick={() => setDisplay1(!displayForm1)}
          >
            Cancel
          </button>
        </form>
      </div>
      <ul>
        {inventoryList.inventory.map((val) => (
          <ItemsUi
            key={val._id}
            data={val}
            edit={newEditData}
            form={editForm}
          ></ItemsUi>
        ))}
      </ul>
      <div className="text-center">
        <button
          className="bg-red-500 p-2 text-lg text-white"
          onClick={() => setDisplay(!displayForm)}
        >
          Add New Item
        </button>
      </div>
    </>
  );
};

export default Inventory;
