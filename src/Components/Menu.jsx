import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/public/Menu.css'
import LogoFalcaoAzul from '../assets/images/logo.png'
import IconePerfil from '../assets/images/perfil3.png'

function Menu() {
    return (
        <div className="container">
            <div className="logo-container">
                <img src={LogoFalcaoAzul} alt="Logo Desbravadores" className="logo" />
                <h3>Clube de Desbravadores Falcão Azul</h3>
            </div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/cartao">Área do Cartão</Link>
                    <Link to="/agenda">Agenda</Link>
                    <Link to="/pontuacao">Pontuação</Link>
                </nav>
            </header>
            <div className='login'>
                <Link to='/login'><h4>Login / Cadastro</h4></Link>
                <img src={IconePerfil} alt="Icone Perfil" className='perfil'/>
            </div>
        </div>
    );
}

export default Menu;
