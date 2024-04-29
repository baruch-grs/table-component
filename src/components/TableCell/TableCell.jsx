import React from "react";
import "./TableCell.css";
import { typeValidator } from "../../utils/CommonFunctions";

const TableCell = ({ bodyData, headers }) => {
  return (
    <>
      <tbody className="table-body-container">
        {bodyData.map((item) => {
          if (typeValidator(item)) {
            return (
              <tr key={item.id} className="table-cell">
                {Object.values(item).map((cell, index) => (
                  <td key={index}>{item[headers[index].mappingID]}</td>
                ))}
              </tr>
            );
          } else {
            return (
              <tr key={item.id}>
                <td>{item}</td>
              </tr>
            );
          }
        })}
      </tbody>
    </>
  );
};

export default TableCell;
