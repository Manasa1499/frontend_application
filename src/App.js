import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/nav";
import Main from "./components/maincontent";
import Footer from "./components/footer";

function App() {
  const [currentTab, setCurrentTab] = useState();
  const user = JSON.parse(localStorage.getItem("user"));
  let isAuthenticated = user?.email ? true : false;

  useEffect(() => {
    const validateToken = async () => {
      const token = JSON.parse(localStorage.getItem("authToken"));
      try {
        if (token) {
          const res = await fetch("http://localhost:5000/validate-token", {
            method: "GET",
            headers: {
              authorization: `bearer ${token}`,
            },
          });

          if (res.status !== 200) {
            localStorage.clear();
            setCurrentTab("/");
          }
        } else {
          localStorage.clear();
          setCurrentTab("/");
        }
      } catch (err) {
        localStorage.clear();
        setCurrentTab("/");
      }
    };
    validateToken();
  }, []);

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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default App;
