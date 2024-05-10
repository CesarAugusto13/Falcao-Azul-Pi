import React from 'react';
import '../assets/public/Menu.css'

function Menu() {
    return (
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/cartao">Área do Cartão</a>
                <a href="/agenda">Agenda</a>
                <a href="/pontuacao">Pontuação</a>
                <a href="/login">Login</a>
            </nav>
        </header>
    );
}

export default Menu;
