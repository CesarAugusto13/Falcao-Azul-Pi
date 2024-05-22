import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import Modal from 'react-modal';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Configure localizer to use Portuguese
moment.locale('pt-br');
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    titulo: '',
    descricao: '',
    DataInicio: new Date(),
    DataFim: new Date(),
  });

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
    setModalIsOpen(true);
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setModalIsOpen(false);
    setNewEvent({ title: '', description: '', start: new Date(), end: new Date() });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 300, width:600 }}
        selectable
        onSelectSlot={handleSelectSlot}
        messages={{
          next: "Próximo",
          previous: "Anterior",
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          agenda: "Agenda",
          date: "Data",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "Não há eventos neste intervalo.",
          showMore: (total) => `+ mais ${total}`
        }}
      />
    </div>
  );
};

export default MyCalendar;
