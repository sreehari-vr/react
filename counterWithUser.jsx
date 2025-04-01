import React, { useState, useEffect } from "react";
import axios from "axios";

function CounterWithUser() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${count}`);
        setUser(response.data);
      } catch (err) {
        setError("User not found!");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [count]);

  return (
    <div className="counter-container">
        <h1>{count}</h1>
      {user && (
        <div className="profile-card">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}

      <div className="bottom">
      <button className="btn" onClick={() => setCount((prev) => Math.max(1, prev - 1))}>➖ Decrement</button>
      <button className="btn" onClick={() => setCount((prev) => prev + 1)}>➕ Increment</button>

      {loading && <p>Loading user...</p>}
      {error && <p className="error">{error}</p>}
      </div>
      
    </div>
  );
}

export default CounterWithUser;
