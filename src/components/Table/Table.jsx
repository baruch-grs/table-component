import React from "react";
import { useEffect, useState } from "react";

import TableCell from "../TableCell/TableCell";
import TableHeaders from "../TableHeaders/TableHeaders";
import "./Table.css";
const Table = ({ dataTable }) => {
  let { tableHeaders, bodyData } = dataTable;
  const [headers, setHeaders] = useState([]);
  const [cellData, setcellData] = useState([]);

  useEffect(() => {
    setHeaders(tableHeaders);
    setcellData(bodyData);
  }, [tableHeaders, bodyData]);

  // bodyData.forEach((item) => {
  //   tableHeaders.forEach((header) => {
  //     console.log(header.label + ": " + item[header.mappingID]);
  //   });
  // });

  return (
    <>
      <table className="table-main">
        <TableHeaders tableHeaders={headers}></TableHeaders>
        <TableCell bodyData={cellData}></TableCell>
      </table>

      <div className="table-mobile">
        {headers.map((header, index) => (
          <table key={index} className="custom-mobile-table">
            <TableHeaders tableHeaders={[header]}></TableHeaders>
            <TableCell
              bodyData={cellData.map((item) => item[header.mappingID])}
            ></TableCell>
          </table>
        ))}
      </div>
    </>
  );
};

export default Table;
