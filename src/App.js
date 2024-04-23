import "./App.css";
import TableHeaders from "./components/TableHeaders/TableHeaders";
import DataTable from "./utils/DataTable";

function App() {
  return (
    <div className="App">
      <table>
        <TableHeaders {}></TableHeaders>
      </table>
    </div>
  );
}

export default App;
