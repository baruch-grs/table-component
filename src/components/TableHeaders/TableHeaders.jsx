import React from "react";

const TableHeaders = ({ tableHeaders }) => {
  return (
    <>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default TableHeaders;
