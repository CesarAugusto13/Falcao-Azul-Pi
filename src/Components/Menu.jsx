import React from 'react';
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
                    <a href="/">Home</a>
                    <a href="/cartao">Área do Cartão</a>
                    <a href="/agenda">Agenda</a>
                    <a href="/pontuacao">Pontuação</a>
                </nav>
            </header>
            <div className='login'>
                <a href='/login'><h4>Login / Cadastro</h4></a>
                <img src={IconePerfil} alt="Icone Perfil" className='perfil'/>
            </div>
        </div>
    );
}

export default Menu;
