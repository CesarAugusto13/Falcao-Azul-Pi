import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

Modal.setAppElement('#root'); // Necessário para acessibilidade

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventDescription, setEventDescription] = useState('');
  const [events, setEvents] = useState({});

  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
    setModalIsOpen(true);
  };

  const handleSaveEvent = () => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [date.toDateString()]: eventDescription
    }));
    setModalIsOpen(false);
    setEventDescription('');
  };

  return (
    <div>
            <div>
        <h3>Eventos:</h3>
        <ul>
          {Object.entries(events).map(([eventDate, description]) => (
            <li key={eventDate}>
              <strong>{eventDate}:</strong> {description}
            </li>
          ))}
        </ul>
      </div>
      <Calendar
        onClickDay={onDateChange}
        locale="pt-BR"
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Event Description Modal"
      >
        <h2>Evento para {format(date, 'PPP', { locale: ptBR })}</h2>
        <textarea
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          placeholder="Digite a descrição do evento"
          rows="4"
          cols="50"
        />
        <br />
        <button onClick={handleSaveEvent}>Salvar Evento</button>
        <button onClick={() => setModalIsOpen(false)}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
