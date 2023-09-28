import React, { useState, useEffect } from "react";
import CreateProduct from "./crud-components/CreateProduct";
import DeleteProduct from "./crud-components/DeleteProduct";
import UpdateProduct from "./crud-components/UpdateProduct";

function EcommerceDisplay() {
  const [ecommerceData, setEcommerceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetch(`${process.env.REACT_APP_DBECOM_ENDPOINT}/api/products`)
      .then((response) => response.json())
      .then((data) => {
        setEcommerceData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [refreshTrigger]);

  const handleDeleteProduct = (productId) => {
    // Hapus produk dari state berdasarkan ID
    const updatedEcommerceData = ecommerceData.filter((item) => item.id !== productId);
    setEcommerceData(updatedEcommerceData);
  };

  const handleUpdateProduct = (productId, updatedProduct) => {
    // Perbarui produk dalam state berdasarkan ID
    const updatedEcommerceData = ecommerceData.map((item) => {
      if (item.id === productId) {
        return updatedProduct;
      }
      return item;
    });
    setEcommerceData(updatedEcommerceData);
  };

  return (
    <div>
      <h1>Ecommerce Display</h1>
      <CreateProduct onProductAdded={() => setRefreshTrigger(!refreshTrigger)} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ecommerceData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <UpdateProduct
                    product={item}
                    onUpdateProduct={(message) =>
                      handleUpdateProduct(item.id, item)
                    }
                  />
                  <DeleteProduct
                    productId={item.id}
                    onDeleteProduct={handleDeleteProduct}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EcommerceDisplay;
