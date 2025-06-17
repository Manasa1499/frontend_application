import { useState } from "react";
import "../index.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const productData = { ...formData, userId: user._id };

    fetch("http://localhost:5000/add-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    }).then(() => {
      setFormData({ name: "", price: "", category: "", company: "" });
    });
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct();
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
