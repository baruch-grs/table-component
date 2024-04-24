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

  return (
    <>
      <table className="table-main">
        <TableHeaders tableHeaders={headers}></TableHeaders>
        <TableCell bodyData={cellData}></TableCell>
      </table>
    </>
  );
};

export default Table;
