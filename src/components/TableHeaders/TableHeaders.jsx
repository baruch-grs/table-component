import React from "react";
import "./TableHeaders.css";

const TableHeaders = ({ tableHeaders }) => {
  return (
    <>
      <thead className="headers-container">
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHeaders;
