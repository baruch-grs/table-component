import "./App.css";
import TableHeaders from "./components/TableHeaders/TableHeaders";
import * as DataTable from "./utils/DataTable";

function App() {
  return (
    <div className="App">
      <table>
        <TableHeaders {...DataTable}></TableHeaders>
      </table>
    </div>
  );
}

export default App;
