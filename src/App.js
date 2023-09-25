import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import DataDisplay from "./components/DataDisplay";
import ApiDisplay from "./components/ApiDisplay";
import EcommerceDisplay from "./components/EcommerceDisplay";

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
