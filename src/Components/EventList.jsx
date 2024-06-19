import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editedEvent, setEditedEvent] = useState({ titulo: '', data: '', valor: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3001/events');
      const formattedEvents = response.data.map(event => ({
        ...event,
        data: event.data.slice(0, 10)
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:3001/delete-event/${eventId}`);
      fetchEvents();
    } catch (error) {
      console.error('Erro ao excluir evento:', error);
    }
  };

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
    setEditedEvent({ ...event });
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    setEditedEvent({ titulo: '', data: '', valor: '' });
    setModalIsOpen(false);
  };

  const handleSaveEvent = async () => {
    try {
      await axios.put(`http://localhost:3001/update-event/${selectedEvent.id}`, editedEvent);
      handleCloseModal();
      fetchEvents();
    } catch (error) {
      console.error('Erro ao atualizar evento:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-item">
          <h4>{event.titulo}</h4>
          <p>Data: {event.data}</p>
          <p>Custo: {event.valor}</p>
          <button onClick={() => handleOpenModal(event)}>Detalhes</button>
          <button onClick={() => handleDeleteEvent(event.id)}>Excluir</button>
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Detalhes do Evento"
      >
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Detalhes do Evento</h2>
            <p>Título: <input type="text" name="titulo" value={editedEvent.titulo} onChange={handleInputChange} /></p>
            <p>Data: <input type="date" name="data" value={editedEvent.data} onChange={handleInputChange} /></p>
            <p>Custo: <input type="number" name="valor" value={editedEvent.valor} onChange={handleInputChange} /></p>
            <button onClick={handleSaveEvent}>Salvar</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EventList;
