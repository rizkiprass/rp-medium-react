import React from "react";

function DeleteProduct({ productId, onDeleteProduct }) {
  const handleDelete = () => {
    // Kirim permintaan DELETE ke API untuk menghapus produk berdasarkan ID
    fetch(`${process.env.REACT_APP_DBECOM_ENDPOINT}/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response message, e.g., display a success message
        console.log(data.message);

        // Panggil callback onDeleteProduct untuk memperbarui tampilan
        onDeleteProduct(productId);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteProduct;
