import React from "react";

const TableCell = ({ bodyData }) => {
  return (
    <>
      <tbody>
        {bodyData.map((item) => (
          <tr key={item.id}>
            <th>{item.id}</th>
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
