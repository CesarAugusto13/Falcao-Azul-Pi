import React from 'react'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import LogoAmigo from '../assets/images/amigo.png'
import LogoComp from '../assets/images/companheiro.png'
import LogoPesq from'../assets/images/pesquisador.png'
import LogoPioneiro from'../assets/images/pioneiro.png'
import LogoExc from'../assets/images/excursionista.png'
import LogoGuia from'../assets/images/guia.png'
import '../assets/public/Cartao.css'

const Cartao = () => {
  return (
    <div className="container-cartoes">
      <Menu />
      <div className="cartoes">
        <div className="cartao-azul">
          <img src={LogoAmigo} alt="Logo cartão amigo" />
          <h4>Amigo</h4>
          <p>10 anos</p>
        </div>
        <div className="cartao-vermelho">
          <img src={LogoComp} alt="Logo cartão amigo" />
          <h4>Companheiro</h4>
          <p>11 anos</p>
        </div>
        <div className="cartao-verde">
          <img src={LogoPesq} alt="Logo cartão amigo" />
          <h4>Pesquisador</h4>
          <p>12 anos</p>
        </div>
        <div className="cartao-cinza">
          <img src={LogoPioneiro} alt="Logo cartão amigo" />
          <h4>Pioneiro</h4>
          <p>13 anos</p>
        </div>
        <div className="cartao-roxo">
          <img src={LogoExc} alt="Logo cartão amigo" />
          <h4>Excursionista</h4>
          <p>14 anos</p>
        </div>
        <div className="cartao-amarelo">
          <img src={LogoGuia} alt="Logo cartão amigo" />
          <h4>Guia</h4>
          <p>15 anos</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cartao
