import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import axios from 'axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import '../assets/public/Modal.css'

Modal.setAppElement('#root'); // Necessário para acessibilidade

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventValue, setEventValue] = useState('');
  const [eventRequirements, setEventRequirements] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  const onDateChange = (selectedDate) => {
    setDate(selectedDate);
    setModalIsOpen(true);
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:3001/delete-event/${eventId}`);
      fetchEvents();
    } catch (error) {
      console.error('Erro ao excluir evento:', error);
    }
  };

  const handleSaveEvent = async () => {
    const eventData = {
      titulo: eventTitle,
      descricao: eventDescription,
      valor: eventValue,
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
      fetchEvents();
    } catch (error) {
      console.error('Erro ao salvar evento:', error);
    }
  };

  return (
    <div>
      <div>
        <h3>Eventos:</h3>
        <ul>
          {Array.isArray(events) && events.map((event) => (
            <li key={event.id}>
              <strong>{event.titulo}:</strong> {event.descricao} (em {format(new Date(event.data), 'PPP', { locale: ptBR })}) 
              <p>Custo: {event.valor}</p> 
              <br/>
              <button className="delete-button" onClick={() => handleDeleteEvent(event.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      </div>
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
          />
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Digite a descrição do evento"
            rows="4"
            cols="50"
          />
          <input
            type="text"
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
