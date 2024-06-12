import React from 'react';
import InstagramIcone from '../assets/images/instagram.png'
import FacebookIcone from '../assets/images/facebook.png'
import QRCodeIcone from '../assets/images/qr_code.png'
import IgrejaAdvenista from '../assets/images/adventista.png'
import '../assets/public/Footer.css';

function Footer() {
    return (
        <footer class="rodape" id="contato">
            <div class="rodape-div">

                <div class="rodape-div-1">
                    <div class="rodape-div-1-coluna">
                        <span><b>Local de Reuniões</b></span>
                        <p><b>Sábados: </b>
                        Rua Piratini, 163 - Jardim Branca Flor, Itapecerica da Serra - SP, 06855-620   </p>
                        <p><b>Domingos: </b> Rua Cerro Largo - Jardim Branca Flor, centro da praça, 06855-620</p>
                    </div>
                </div>

                <div class="rodape-div-2">
                    <div class="rodape-div-2-coluna">
                        <span><b>Contato</b></span>
                        <p>11 98639-4544 - Gabriel Quintanilha</p>
                        <img src={QRCodeIcone} alt="QR Code Whatsapp" />
                    </div>
                </div>

                <div class="rodape-div-3">
                    <div class="rodape-div-4-coluna">
                        <span><b>Direção</b></span>
                        <p>Diretor: Gabriel Quintanilha</p>
                        <p>Vice-Diretora: Larissa Souza</p>
                        <p>Secretária: Leticia Souza</p>
                        <p>Tesoureiro: Bruno Feitosa</p>
                        <p>Capelão: Tiago Quintanilha</p>
                    </div>
                </div>

                <div class="rodape-div-4">
                    <div class="rodape-div-3-coluna">
                        <span><b>Redes Sociais</b></span>
                        <div className='elementos'>
                            <p><a href="https://www.instagram.com/falcao_azul_aps/" target="_blank">
                            <img src={InstagramIcone} alt='Instagram Logo'/></a>
                            </p>
                            <p>
                            <a href="https://www.facebook.com/ClubeFalcaoAzul" target="_blank">
                            <img src={FacebookIcone} alt='Facebook Logo'/></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="logoAdventista">
                    <img src={IgrejaAdvenista} alt="Igreja Adventista"/>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
