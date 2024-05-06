import React, { useState } from 'react';
import '../assets/public/Login.css'


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log('Username:', username);
    console.log('Password:', password);
    // Lógica de autenticação aqui...
  };

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nome de Usuário ou Email:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;