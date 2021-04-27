import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import AppMain from "./components/AppMain";

function App() {
  return (
    <Router>
      <AppMain></AppMain>
    </Router>
  );
}

export default App;
