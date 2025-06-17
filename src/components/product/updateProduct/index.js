import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const token = "bearer "+JSON.parse(localStorage.getItem("authToken"));
    const resp = await fetch("http://localhost:5000/productById/" + params.id, {
      headers: {
        authorization: token,
      },
    });
    const data = await resp.json();
    setFormData({
      name: data.name,
      price: data.price,
      category: data.category,
      company: data.company,
      userId: data.userId,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = () => {
    const token = "bearer "+JSON.parse(localStorage.getItem("authToken"));
    fetch("http://localhost:5000/updateProduct/" + params.id, {
      method: "Put",
      headers: { "Content-Type": "application/json", authorization: token },
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData({ name: "", price: "", category: "", company: "" });
      navigate("/productlist");
    });
  };

  return (
    <div className="form-container">
      <h2>Update The Product</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdateProduct();
        }}
      >
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Product Name"
          className="inputBox"
          required
        />
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter Product Price"
          className="inputBox"
          required
        />
        <input
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter Product Category"
          className="inputBox"
          required
        />
        <input
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter Product Company"
          className="inputBox"
          required
        />

        <button className="productBtn" type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
