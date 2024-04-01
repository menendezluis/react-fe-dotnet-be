import logo from "./logo.svg";
import "./App.css";
import ViewRecords from "./components/ViewRecords";
import CreateRecord from "./components/CreateRecord";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Registros</h1>
        <CreateRecord />
        <ViewRecords />
      </header>
    </div>
  );
}

export default App;
