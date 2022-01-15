import "./App.css";
import Dashboard from "./components/logged_in/dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Dashboard username={"Test"} />
    </div>
  );
}

export default App;
