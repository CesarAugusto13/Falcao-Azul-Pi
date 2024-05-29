import React from 'react'
import '../assets/public/Login.css'
import { Link } from 'react-router-dom'; 
import LogoFalcaoAzul from '../assets/images/logo.png'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <img src={LogoFalcaoAzul} alt="Logo Desbravadores" className="logo" />
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Email'autoFocus required/>
                <input type="password" placeholder='Password' required/>
                <button >Login</button>
            </form>
            <p>Não tem uma conta? <Link to='/register'><span href='/register'>Registrar</span></Link></p>
        </div>
    </div>
  )
}

export default Login