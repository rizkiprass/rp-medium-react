import React, { useState, useEffect } from "react";

function DataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("/db")
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
      <h1>Data from Database</h1>
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

// function Home() {
//   const [backendData, setBackendData] = useState({ users: [] });

//   useEffect(() => {
//     fetch("/api")
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, []);

//   return (
//     <div>
//       {backendData.users.length === 0 ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.users.map((user, i) => <p key={i}>{user}</p>)
//       )}
//     </div>
//   );
// }

// export default Home;
export default DataDisplay;
