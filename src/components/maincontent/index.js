import { Routes, Route } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";
import ProductList from "../product/productList";
import AddProduct from "../product/addProduct";
import UpdateProduct from "../product/updateProduct";
import { Container, CssBaseline } from "@material-ui/core";
import { useStyles } from "../styledcomponents";
import Home from "../home";

const Main = (props) => {
  const { isAuthenticated, setCurrentTab } = props;
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
            {isAuthenticated ? (
              <>
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/updateproduct" element={<UpdateProduct />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route
                  path="/login"
                  element={<Login setCurrentTab={setCurrentTab} />}
                />
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
