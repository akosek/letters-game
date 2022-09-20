// Components
import Playgroud from "./containers/Playgroud";
import Dashboard from "./containers/Dashboard";
// styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__main app__main--playgroud">
        <Playgroud />
      </div>
      <div className="app__main app__main--dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
