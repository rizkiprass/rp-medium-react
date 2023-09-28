import React, { useState } from "react";

function UpdateProduct({ product, onUpdateProduct }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleUpdateProduct = () => {
    // Kirim permintaan PUT ke API untuk mengupdate produk
    fetch(
      `${process.env.REACT_APP_DBECOM_ENDPOINT}/api/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Panggil fungsi callback onUpdateProduct untuk memperbarui tampilan
        onUpdateProduct(data.message);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="number" value={price} onChange={handlePriceChange} />
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  );
}

export default UpdateProduct;
