import { useEffect, useState } from "react";
import "../index.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData();
  }, []);

  const token = "bearer "+JSON.parse(localStorage.getItem("authToken"));

  const getProductData = async () => {
    const resp = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: token,
      },
    });
    const data = await resp.json();
    console.log({ data });
    setProducts(data);
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/deleteProduct/${id}`, {
      method: "Delete",
      headers: {
        authorization: token,
      },
    }).then(async (resp) => {
      const data = await resp.json();
      console.log({ data });
      getProductData();
    });
  };

  const handleSearch = async (event) => {
    const key = event.target.value;

    if (key) {
      const resp = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: token,
        },
      });
      const data = await resp.json();
      setProducts(data);
    } else {
      getProductData();
    }
  };

  return (
    <div className="productList">
      <h2>Product List</h2>

      <>
        <input
          onChange={handleSearch}
          className="searchInput"
          type="text"
          placeholder="Search Product"
        />
        <ul style={{ fontWeight: 800 }}>
          <li>S. NO.</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Company</li>
          <li>Operation</li>
        </ul>

        {products.length > 0 ? (
          <>
            {products.map((product, index) => (
              <ul key={product.id}>
                <li>{index + 1}</li>
                <li>{product.name}</li>
                <li>{product.price}</li>
                <li>{product.category}</li>
                <li>{product.company}</li>
                <li>
                  <button onClick={() => deleteProduct(product._id)}>
                    Delete
                  </button>
                  <a
                    style={{
                      padding: "10px",
                      textDecoration: "None",
                      fontWeight: "500",
                    }}
                    href={"/updateproduct/" + product._id}
                  >
                    Update
                  </a>
                </li>
              </ul>
            ))}
          </>
        ) : (
          <div
            style={{
              display: "inline-block",
              width: "500px",
              marginTop: "50px",
            }}
          >
            No products found. Navigate to the 'Add Product' tab to create a new
            one.
          </div>
        )}
      </>
    </div>
  );
};

export default ProductList;
