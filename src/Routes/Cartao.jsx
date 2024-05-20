import React from 'react'
import style from '../assets/public/Cartao.css'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import CapaAmigo from '../assets/images/capa-amigo.png'
import CapaComp from '../assets/images/capa-comp.png'
import CapaPesq from '../assets/images/capa-pesq.png'

function Cartao() {
  return (
    <div>
      <Menu></Menu>
      
      <body>
      <img src={CapaAmigo} alt="Capa amigo" />
      <img src={CapaComp} alt="Capa companheiro" />
      <img src={CapaPesq} alt="Capa Pesquisador" />
      </body>
      <Footer></Footer>
    </div>
  )
}

export default Cartao
