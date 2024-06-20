import React from "react";
import LogoFalcaoAzul from '../assets/images/logo.png'
import { Link } from 'react-router-dom'; 

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
      <img src={LogoFalcaoAzul} alt="Logo Desbravadores" className="logo" />
        <span className="title">Registrar</span>
        <form>
          <input
            type="text"
            placeholder="Usuario"
            autoFocus
            pattern="[A-Za-z0-9]+"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Please enter only alphabets and numbers"
              )
            }
            required
          />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
         
          <button>Registrar-se</button>
        </form>
        <p>
            Já possui uma conta?  <Link to='/login'><span href='/login'>Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;