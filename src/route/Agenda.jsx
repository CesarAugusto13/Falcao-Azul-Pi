import React from 'react'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Calendario from '../Components/Calendario'
import EventList from '../Components/EventList'
import '../assets/public/Agenda.css'

const Agenda = () => {
  return (
    <>
      <Menu/>
      <div className='Central'>
        <EventList/>
        <Calendario/>
      </div>
      <Footer/>
    </>
  )
}

export default Agenda
