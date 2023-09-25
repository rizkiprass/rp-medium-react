import React, { useState } from "react";

function CreateProduct({ onProductAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAddProduct = () => {
    // Kirim permintaan POST ke API untuk menambahkan produk baru
    fetch(process.env.REACT_APP_DBECOM_ENDPOINT + "/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Panggil fungsi callback onProductAdded untuk memperbarui tampilan
        onProductAdded(data.message);
        setName("");
        setPrice("");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div>
      <h2>Create Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default CreateProduct;