import React from 'react'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import CapaAmigo from '../assets/images/capa-amigo.png'
import CapaComp from '../assets/images/capa-comp.png'
import CapaPesq from'../assets/images/capa-pesq.png'
import '../assets/public/Cartao.css'

const Cartao = () => {
  return (
    <div>
      <div class='Cartao'>
      <img src={CapaAmigo} alt="Capa amigo" />
      <img src={CapaComp} alt="Capa companheiro" />
      <img src={CapaPesq} alt="Capa Pesquisador" />
      </div>
      
        <div>
          <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
          <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
      <Menu></Menu>
      <Footer></Footer>
    </div>
    
  )
}

export default Cartao
