import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch(`http://172.31.6.109:8080/api`)
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {backendData.users.length === 0 ? (
        <p>Loading2...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
}

export default App;
