import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSales, setSales } from "../Redux/SalesRedux";
import SalesUi from "../components/SalesUi";
const Sales = () => {
  const [displayForm, setDisplay] = useState(false);
  const dispatcher = useDispatch();
  const inventoryList = useSelector((state) => state.itemsReducer);
  const [totalPrice, setPrice] = useState(0);
  const [totalQuantity, setQuantity] = useState(0);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [filterData, setFilterData] = useState([]);
  const salesList = useSelector((state) => state.salesReducer);
  useEffect(() => {
    dispatcher(getSales());
  }, [dispatcher]);
  console.log(salesList.sales);
  function getSalesForm(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
      amount: totalPrice * Number(event.target.quantity.value),
      date: event.target.date.value,
    };
    console.log(data);
    dispatcher(setSales(data));
    setPrice(0);

    setQuantity(0);
    setDisplay(!displayForm);
  }
  function dateFilter() {
    const filteredSalesData = salesList.sales.filter((sale) => {
      const saleDate = new Date(sale.date);
      return startDate && endDate
        ? saleDate >= new Date(startDate) && saleDate <= new Date(endDate)
        : true; // No date range filter applied
    });
    setStartDate(null);
    setEndDate(null);
    setFilterData(filteredSalesData);
    console.log(filteredSalesData);
  }
  return (
    <>
      <div className="space-y-2 space-x-2 text-center">
        <span>Start Date</span>
        <input
          className="border border-gray-400"
          type="date"
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
        <span>End Date</span>
        <input
          className="border border-gray-400"
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
        <button
          className="border p-2 border-gray-400"
          onClick={() => dateFilter()}
        >
          Generate
        </button>
        <button
          className="border p-2 border-gray-400"
          onClick={() => setFilterData([])}
        >
          All Sales
        </button>
      </div>
      <div
        style={{
          display: displayForm ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          onSubmit={(e) => {
            getSalesForm(e);
            e.target.reset();
          }}
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
        >
          <label>Enter Item</label>
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
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
          <label>Enter Price</label>
          <input
            className="border-2 border-gray-400"
            required
            id="price"
            type="number"
            onChange={(e) => setPrice(Number(e.target.value) * totalQuantity)}
          ></input>
          <label>Select Date</label>
          <input
            type="date"
            id="date"
            required
            className="border-2 border-gray-400"
          ></input>
          <label>Total Amount:{totalPrice}</label>
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
      <ul>
        {filterData.length > 0
          ? filterData.map((val) => (
              <SalesUi key={val._id} data={val}></SalesUi>
            ))
          : salesList.sales.map((val) => (
              <SalesUi key={val._id} data={val}></SalesUi>
            ))}
      </ul>
      <button
        className="bg-red-500 p-2 text-lg text-white"
        onClick={() => setDisplay(!displayForm)}
      >
        Add New Sale
      </button>
    </>
  );
};

export default Sales;
