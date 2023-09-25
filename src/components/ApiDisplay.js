import React, { useState, useEffect } from "react";

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

  export default ApiDisplay;