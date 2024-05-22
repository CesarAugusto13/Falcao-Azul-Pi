import React from 'react';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import '../assets/public/Home.css';
import LogoFalcaoAzul from '../assets/images/logo.png';

import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div>
      <Menu />
      <main className="main"> 
        <img src={LogoFalcaoAzul} alt="Logo Falcão Azul" className="logoClubeMain" />
        <section>
          <h2 className="josefin-sans-heading">Quem somos</h2>
          <p className="open-sans-body">
            O Clube de Desbravadores da Igreja Adventista ensina habilidades práticas e valores,
            como disciplina e civismo, através de atividades. Com acampamentos anuais que 
            incluem ensinamentos de sobrevivência e momentos espirituais, o objetivo dos 
            Desbravadores é orientar os jovens no caminho espiritual e promover sua saúde mental,
            espiritual e física. O Clube Falcão Azul tem mais de 43 anos de experiência.
          </p>
        </section>

        <section>
          <h2 className="josefin-sans-heading">Até que idade posso participar?</h2>
          <p className="open-sans-body">Dos 10 aos 16 anos de idade.</p>
        </section>

        <section>
          <h2 className="josefin-sans-heading">Horário e Local das Reuniões</h2>
          <p className="open-sans-body">
            Sábado das 14:45h às 17:00h 
            Local: Rua Piratini 163, Jardim Branca Flor, CEP: 06855-620 - Igreja Adventista <br />
            Domingo das 08:45h às 12:00h 
            Local: Rua Cerro Largo, Jardim Branca Flor, CEP: 06855-740 - Rotatória da praça
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
