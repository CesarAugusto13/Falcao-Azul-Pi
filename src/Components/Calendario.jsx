import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import axios from 'axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

Modal.setAppElement('#root'); // Necessário para acessibilidade

const Calendario = () => {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventValue, setEventValue] = useState(''); // Novo estado para "valor"
  const [eventRequirements, setEventRequirements] = useState(''); // Novo estado para "requisitos"
  const [events, setEvents] = useState([]); // Inicializa como uma array vazia

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

  const handleSaveEvent = async () => {
    const eventData = {
      titulo: eventTitle,
      descricao: eventDescription,
      valor: eventValue, // Adiciona o campo "valor"
      requisitos: eventRequirements, // Adiciona o campo "requisitos"
      data: format(date, 'yyyy-MM-dd')
    };

    try {
      await axios.post('http://localhost:3001/add-event', eventData);
      setModalIsOpen(false);
      setEventTitle('');
      setEventDescription('');
      setEventValue(''); // Limpa o campo "valor"
      setEventRequirements(''); // Limpa o campo "requisitos"
      fetchEvents(); // Atualiza a lista de eventos após salvar
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
              <br />
              <strong>Valor:</strong> {event.valor}
              <br />
              <strong>Requisitos:</strong> {event.requisitos}
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
        <h2>Evento para {format(date, 'PPP', { locale: ptBR })}</h2>
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
        <br />
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

export default Calendario;
