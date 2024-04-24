import React from "react";
import "./TableCell.css";

const TableCell = ({ bodyData }) => {
  return (
    <>
      <tbody className="table-body-container">
        {bodyData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableCell;
