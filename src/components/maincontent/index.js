import { Routes, Route } from "react-router-dom";
import Login from "../login";
import Register from "../register";
import ProductList from "../product/productList";
import AddProduct from "../product/addProduct";
import UpdateProduct from "../product/updateProduct";
import { Container, CssBaseline } from "@material-ui/core";
import { useStyles } from "../styledcomponents";

const Main = () => {
  const classes = useStyles();
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
        <div className={classes.paper}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Routes>
        </div>
      </Container>
    </div>
  );
};

export default Main;
