
import React, { useState } from 'react';


const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('salma');
  const [password, setPassword] = useState('chama');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      setIsAuthenticated(true);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(salma)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(chama)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
