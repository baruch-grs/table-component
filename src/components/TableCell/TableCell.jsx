import React from "react";
import "./TableCell.css";

const TableCell = ({ bodyData }) => {
  return (
    <>
      <tbody className="table-body-container">
        {bodyData.map((item) => (
          <tr key={item.id} className="table-cell">
            {Object.values(item).map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default TableCell;
