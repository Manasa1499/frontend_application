import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/nav";
import Main from "./components/maincontent";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
