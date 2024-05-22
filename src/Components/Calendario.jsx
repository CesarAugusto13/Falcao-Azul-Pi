import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';

moment.locale('pt-br');
const localizer = momentLocalizer(moment);

const messages = {
  allDay: 'Todo o dia',
  previous: 'Anterior',
  next: 'Próximo',
  today: 'Hoje',
  month: 'Mês',
  week: 'Semana',
  day: 'Dia',
  agenda: 'Agenda',
  date: 'Data',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'Não há eventos nesta faixa',
  showMore: (total) => `+ ver mais (${total})`
};

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent({ ...newEvent, start, end });
    setModalIsOpen(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setModalIsOpen(false);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        messages={messages}
        style={{ height: 500, margin: '50px' }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Event Modal"
      >
        <h2>{selectedEvent.title ? 'Detalhes do Evento' : 'Adicionar Evento'}</h2>
        {selectedEvent.title ? (
          <div>
            <p>Título: {selectedEvent.title}</p>
            <p>Início: {moment(selectedEvent.start).format('MMMM Do YYYY, h:mm a')}</p>
            <p>Fim: {moment(selectedEvent.end).format('MMMM Do YYYY, h:mm a')}</p>
            <button onClick={() => setModalIsOpen(false)}>Fechar</button>
          </div>
        ) : (
          <div>
            <label>
              Título:
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
            </label>
            <button onClick={handleAddEvent}>Adicionar Evento</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyCalendar;
