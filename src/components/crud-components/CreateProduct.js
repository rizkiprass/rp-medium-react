import React, { useState } from "react";

function CreateProduct({ onProductAdded }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null); // State untuk menyimpan file gambar yang akan diunggah

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    // Mengambil file gambar dari input
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleAddProduct = () => {
    // Membuat objek FormData untuk mengirim data yang mengandung gambar
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    // Kirim permintaan POST ke API untuk menambahkan produk baru
    fetch(`${process.env.REACT_APP_DBECOM_ENDPOINT}/api/products`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Panggil fungsi callback onProductAdded untuk memperbarui tampilan
        onProductAdded(data.message);
        setName("");
        setPrice("");
        setImage(null); // Reset input gambar setelah berhasil
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
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default CreateProduct;
