import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch(`http://13.39.147.72:8080/api`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {backendData.users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
