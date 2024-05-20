import React from 'react'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import '../assets/public/Home.css'
import LogoFalcaoAzul from '../assets/images/logo.png'

const Home = () => {
  return (
    <div>
      <Menu></Menu>
      <main>
        <section>
          <h2>Quem somos</h2>
          <p>O Clube de Desbravadores da Igreja Adventista ensina habilidades práticas e valores,<br /> como disciplina e civismo, através de atividades. 
            <br />Com acampamentos anuais que incluem ensinamentos de sobrevivência e momentos<br /> espirituais, o objetivo dos Desbravadores é orientar os jovens no caminho espiritual
            <br /> e promover sua saúde mental, espiritual e física. O Clube Falcão Azul tem mais de<br /> 43 anos de experiência.
          </p>
        </section>

        <section>
          <div>
            <h2>Até que idade posso participar?</h2>
            <p>Dos 10 aos 16 anos de idade.</p>
          </div>
        </section>

        <section>
          <div>
            <h2>Horário e Local das Reuniões</h2>
            <p>Sábado das 14:45h às 17:00h 
              Local: Rua Piratini 163, Jardim Branca Flor, CEP: 06855-620 - Igreja Adventista <br />

              Domingo das 08:45h às 12:00h 
              Local: Rua Cerro Largo, Jardim Branca Flor, CEP: 06855-740 - Rotatória da praça
            </p>
          </div>
        </section>

        <img src={LogoFalcaoAzul} alt="Logo Falcão Azul" class="logoClubeMain"/>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
