import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function DataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch(process.env.REACT_APP_DB_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Data has been fetched, so loading is done
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error too
      });
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function ApiDisplay() {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {backendData.users.length === 0 ? (
        <p>Loading2...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

function EcommerceDisplay() {
  const [ecommerceData, setEcommerceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch(process.env.REACT_APP_DBECOM_ENDPOINT) // Menggunakan endpoint yang telah dibuat
      .then((response) => response.json())
      .then((data) => {
        setEcommerceData(data);
        setLoading(false); // Data has been fetched, so loading is done
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error too
      });
  }, []);

  return (
    <div>
      <h1>Ecommerce Display</h1>
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


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Test Page</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/api">API User Display</Link>
            </li>
            <li>
              <Link to="/db">Data Display</Link>
            </li>
            <li>
              <Link to="/ecommerce">Ecommerce Display</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/api" element={<ApiDisplay />} />
          <Route path="/db" element={<DataDisplay />} />
          <Route path="/ecommerce" element={<EcommerceDisplay />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
