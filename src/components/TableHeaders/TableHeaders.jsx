import React from "react";
import "./TableHeaders.css";

const TableHeaders = ({ tableHeaders }) => {
  console.log("====================================");
  console.log(tableHeaders);
  console.log("====================================");
  return (
    <>
      <thead className="headers-container">
        <tr className="header-row headers-mobile-row">
          {tableHeaders.map((header, index) => (
            <th key={index}>{header.label}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHeaders;
