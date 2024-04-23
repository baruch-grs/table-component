import "./App.css";
import Table from "./components/Table/Table";
import DataTable from "./utils/DataTable.json";

function App() {
  return (
    <div className="App">
      <Table dataTable={DataTable}></Table>
    </div>
  );
}

export default App;
