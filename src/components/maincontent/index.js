import { Routes, Route } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import ProductList from "../product/productList";
import AddProduct from "../product/addProduct";
import UpdateProduct from "../product/updateProduct";
import { Container, CssBaseline } from "@mui/material";
import Home from "../home";
import ProtectedRoutes from "./privateRoute";

const Main = (props) => {
  const { isAuthenticated, setCurrentTab } = props;

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        padding: "20px",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px"
          }}
        >
          <Routes>
            <Route
              path="/login"
              element={<Login setCurrentTab={setCurrentTab} />}
            />
            <Route
              path="/"
              element={<Home isAuthenticated={isAuthenticated} />}
            />
            {isAuthenticated ? (
              <Route
                element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}
              >
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/updateproduct/:id" element={<UpdateProduct />} />
              </Route>
            ) : (
              <>
                <Route path="/signup" element={<Signup />} />
              </>
            )}
          </Routes>
        </div>
      </Container>
    </div>
  );
};

export default Main;
