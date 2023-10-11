import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInventory } from "../Redux/InventoryRedux";
import { getSales } from "../Redux/SalesRedux";
import TableContents from "../components/TableContents";
import TableItems from "../components/TableItems";
const AllReports = () => {
  const dispatcher = useDispatch();
  const salesList = useSelector((state) => state.salesReducer);
  const inventoryList = useSelector((state) => state.itemsReducer);

  useEffect(() => {
    dispatcher(getInventory());
    dispatcher(getSales());
  }, [dispatcher]);
  return (
    <div className="w-fit m-auto space-x-2 space-y-4 flex flex-col justify-center items-center mt-8">
      <div>
        <TableItems data={inventoryList.inventory}></TableItems>
      </div>
      <div className="text-center">
        <TableContents data={salesList.sales}></TableContents>
      </div>
    </div>
  );
};

export default AllReports;
