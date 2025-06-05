import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/nav";
import Login from "./components/login";
import Register from "./components/register";
import UpdateProduct from "./components/product/updateProduct";
import AddProduct from "./components/product/addProduct";
import ProductList from "./components/product/productList";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div style={{ marginTop: "60px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
