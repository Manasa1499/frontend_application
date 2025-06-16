import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/nav";
import Main from "./components/maincontent";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated = user?.email ? true : false;

  return (
    <div className="App">
      <Router>
        <NavBar
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          isAuthenticated={isAuthenticated}
        />
        <Main setCurrentTab={setCurrentTab} isAuthenticated={isAuthenticated} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
