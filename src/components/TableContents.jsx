import React from "react";

const TableContents = ({ data }) => {
  const tableRows = data.map((item, index) => (
    <tr key={index}>
      <td className="p-2 border border-stone-500">{item.name}</td>{" "}
      {/* Replace with your object properties */}
      <td className="p-2 border border-stone-500">{item.quantity}</td>
      <td className="p-2 border border-stone-500">{item.price}</td>
      <td className="p-2 border border-stone-500">{item.amount}</td>
      {/* Add more <td> elements for additional properties */}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr className="border border-stone-500">
          <th className="p-2 border border-stone-500">Name</th>{" "}
          {/* Replace with your column headers */}
          <th className="p-2 border border-stone-500">Quanitity</th>
          <th className="p-2 border border-stone-500">Price</th>
          <th className="p-2 border border-stone-500">Amount</th>
          {/* Add more <th> elements for additional headers */}
        </tr>
      </thead>
      <tbody className="border border-stone-500 ">{tableRows}</tbody>
    </table>
  );
};

export default TableContents;
