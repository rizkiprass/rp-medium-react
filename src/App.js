import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://10.0.137.8:8080/api/data"); // Sesuaikan dengan URL server Express Anda
      const jsonData = await response.json();
      setData(jsonData.message);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Data dari server Express:</p>
        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
