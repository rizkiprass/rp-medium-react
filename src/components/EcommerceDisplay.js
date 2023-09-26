import React, { useState, useEffect } from "react";
import CreateProduct from "./crud-components/CreateProduct";

function EcommerceDisplay() {
  const [ecommerceData, setEcommerceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(false); // Add a trigger state

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
  }, [refreshTrigger]); // Add refreshTrigger as a dependency

  const handleProductAdded = (message) => {
    // Anda dapat mengimplementasikan logika apa pun yang diperlukan
    // ketika produk baru ditambahkan, seperti memperbarui tampilan, pesan, dll.
    console.log(message);

    // Update the refreshTrigger to trigger a refresh of the useEffect
    setRefreshTrigger(!refreshTrigger);
  };

  return (
    <div>
      <h1>Ecommerce Display</h1>
      <CreateProduct onProductAdded={handleProductAdded} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {ecommerceData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EcommerceDisplay;
