import React from 'react';
import FalcaoLogo from '../assets/images/logo.png'
import InstagramIcone from '../assets/images/instagram_icon.png'
import FacebookIcone from '../assets/images/facebook_icon.png'
import '../assets/public/Footer.css'

function Menu() {
    return (
        <footer>
            <h4>Endereço Da Igreja Adventista do Sétimo Dia do Jardim Branca Flor 
            <br/>Rua Piratini - 163 -Jardim Branca Flor, Itapecerica da Serra - SP
            06855-620
            </h4>
            Email: gabriel.hemendinger@gmail.com
            <br/>
            <div class='redes'>
            Redes Sociais:
                <a href="https://www.instagram.com/falcao_azul_aps/" target="_blank">
                    <img src={InstagramIcone} alt='Instagram Logo'/>
                </a>
                <a href="https://www.facebook.com/ClubeFalcaoAzul" target="_blank">
                    <img src={FacebookIcone} alt='Facebook Logo'/>
                </a>
            </div>
        <div class='container'>
            <div class='cargo'>
                <h4>
                    Diretor:
                    <br/>
                    Gabriel Quintanilha
                </h4>
            </div>
            <div class='cargo'>
                <h4>
                    Vice-Diretora:
                    <br/>
                    Larissa Souza
                </h4>
            </div>
            <div class='cargo'>
                <h4>
                    Secretária:
                    <br/>
                    Leticia Souza
                </h4>
            </div>
            <div class='cargo'>
                <h4>
                    Tesoureiro:
                    <br/>
                    Bruno Feitosa
                </h4>
            </div>
            <div class='cargo'>
                <h4>
                    Capelão:
                    <br/>
                    Tiago Quintanilha
                </h4>
            </div>
        </div>
        <img src={FalcaoLogo} alt="Falcao Azul Logo" />
      </footer>
    );
}

export default Menu;
