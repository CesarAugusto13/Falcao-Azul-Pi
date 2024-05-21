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
      <img src={LogoFalcaoAzul} alt="Logo Falcão Azul" class="logoClubeMain"/>
        <section>
          <h2 class="h2quemSomos">Quem somos</h2>
          <p >O Clube de Desbravadores da Igreja Adventista ensina habilidades práticas e valores,<br /> como disciplina e civismo, através de atividades. 
            Com acampamentos anuais que <br />incluem ensinamentos de sobrevivência e momentos espirituais, o objetivo dos <br />Desbravadores é orientar os jovens no caminho espiritual
            e promover sua saúde mental,<br /> espiritual e física. O Clube Falcão Azul tem mais de 43 anos de experiência.
          </p>
        </section>

        <section>
          <h2 class="h2IdadePart">Até que idade posso participar?</h2>
          <p>Dos 10 aos 16 anos de idade.</p>
        </section>

        <section>
          <h2 class="h2HorarioLocal">Horário e Local das Reuniões</h2>
          <p>Sábado das 14:45h às 17:00h 
            Local: Rua Piratini 163, Jardim Branca Flor, CEP: 06855-620 - Igreja Adventista <br />

            Domingo das 08:45h às 12:00h 
            Local: Rua Cerro Largo, Jardim Branca Flor, CEP: 06855-740 - Rotatória da praça
          </p>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
