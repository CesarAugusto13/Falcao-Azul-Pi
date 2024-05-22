import React from 'react'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Calendario from '../Components/Calendario'
import '../assets/public/Agenda.css'

const Agenda = () => {
  return (
    <body>
      <Menu/>
      <Calendario/>
      <Footer/>
    </body>
  )
}

export default Agenda
