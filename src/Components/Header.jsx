import React from 'react';
import '../assets/public/Header.css'

function Header() {
    return (
        <header>
            <h1>Falcão Azul</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Área do Cartão</a>
                <a href="#">Agenda</a>
                <a href="#">Pontuação</a>
            </nav>
        </header>
    );
}

export default Header;
