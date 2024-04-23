import React from "react";
import { useEffect, useState } from "react";

import TableCell from "../TableCell/TableCell";
import TableHeaders from "../TableHeaders/TableHeaders";

const Table = ({ dataTable }) => {
  const [headers, setHeaders] = useState([]);
  const [bodyData, setBodyData] = useState([]);

  useEffect(() => {
    setHeaders(dataTable.tableHeaders);
    setBodyData(dataTable.bodyData);
  }, [dataTable.tableHeaders, dataTable.bodyData]);

  return (
    <>
      <table>
        <TableHeaders tableHeaders={headers}></TableHeaders>
        <TableCell bodyData={bodyData}></TableCell>
      </table>
    </>
  );
};

export default Table;
