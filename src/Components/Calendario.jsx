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
        style={{ height: 500 }}
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Adicionar Evento"
      >
        <h2>Adicionar Evento</h2>
        <form>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Descrição:</label>
            <input
              type="text"
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Data de Início:</label>
            <input
              type="datetime-local"
              name="start"
              value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
              onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
            />
          </div>
          <div>
            <label>Data de Término:</label>
            <input
              type="datetime-local"
              name="end"
              value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
              onChange={(e) => setNewEvent({ ...newEvent, end: new Date(e.target.value) })}
            />
          </div>
          <button type="button" onClick={handleAddEvent}>Adicionar Evento</button>
        </form>
      </Modal>
    </div>
  );
};

export default MyCalendar;
