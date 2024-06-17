import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import axios from 'axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import '../assets/public/Modal.css';
import '../assets/public/Calendario.css';

Modal.setAppElement('#root'); // Necessário para acessibilidade

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventValue, setEventValue] = useState('');
  const [eventRequirements, setEventRequirements] = useState('');
  const [events, setEvents] = useState([]);



  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
    setModalIsOpen(true);
  };


  const handleSaveEvent = async () => {
    const eventData = {
      titulo: eventTitle,
      descricao: eventDescription,
      valor: eventValue.trim() === '' ? '00.00' : eventValue,
      requisitos: eventRequirements,
      data: format(date, 'yyyy-MM-dd')
    };

    try {
      await axios.post('http://localhost:3001/add-event', eventData);
      setModalIsOpen(false);
      setEventTitle('');
      setEventDescription('');
      setEventValue('');
      setEventRequirements('');
    } catch (error) {
      console.error('Erro ao salvar evento:', error);
    }
  };

  return (
    <div className='Calendario'>
      <h3>Eventos</h3>
      <Calendar
        onClickDay={onDateChange}
        locale="pt-BR"
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const eventForDate = events.find(event => event.data === format(date, 'yyyy-MM-dd'));
            return eventForDate ? <p>{eventForDate.titulo}</p> : null;
          }
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Event Description Modal"
      >
        <div className="modal-header">
          <h2>Evento para {format(date, 'PPP', { locale: ptBR })}</h2>
          <button onClick={() => setModalIsOpen(false)}>&times;</button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Título do evento"
            required
          />
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Digite a descrição do evento"
            rows="4"
            cols="50"
            required
          />
          <input
            type="number"
            value={eventValue}
            onChange={(e) => setEventValue(e.target.value)}
            placeholder="Valor do evento"
          />
          <textarea
            value={eventRequirements}
            onChange={(e) => setEventRequirements(e.target.value)}
            placeholder="Requisitos do evento"
            rows="2"
            cols="50"
          />
        </div>
        <div className="modal-footer">
          <button className="save-button" onClick={handleSaveEvent}>Salvar Evento</button>
          <button className="cancel-button" onClick={() => setModalIsOpen(false)}>Cancelar</button>
        </div>
      </Modal>
    </div>
  );
};

export default Calendario;
