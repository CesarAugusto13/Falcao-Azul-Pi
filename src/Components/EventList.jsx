import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../assets/public/Eventlist.css';

Modal.setAppElement('#root');

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editedEvent, setEditedEvent] = useState({ titulo: '', data: '', valor: '', requisitos: '', descricao: '' });

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
      window.location.reload();
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
    setEditedEvent({ titulo: '', data: '', valor: '', requisitos: '', descricao: '' });
    setModalIsOpen(false);
  };

  const handleSaveEvent = async () => {
    try {
      await axios.put(`http://localhost:3001/update-event/${selectedEvent.id}`, editedEvent);
      handleCloseModal();
      fetchEvents();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao atualizar evento:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };

  return (
    <>
      <div className='mural'>
        <div className="event-table-container">
          {events.length > 0 ? (
            <table className="event-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Data</th>
                  <th>Custo</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="event-item">
                    <td>{event.titulo}</td>
                    <td>{event.data}</td>
                    <td>{event.valor}</td>
                    <td>
                      <button onClick={() => handleOpenModal(event)} className='btn-detalhes'>Detalhes</button>
                      <button onClick={() => handleDeleteEvent(event.id)} className='btn-excluir'>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-events">Nenhum evento adicionado</p>
          )}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Detalhes do Evento"
        >
          <div className="modal">
            <div className="modal-body">
              <h2>Detalhes do Evento</h2>
              <p>Título: <input type="text" name="titulo" value={editedEvent.titulo} onChange={handleInputChange} /></p>
              <p>Data: <input type="date" name="data" value={editedEvent.data} onChange={handleInputChange} /></p>
              <p>Custo: <input type="number" name="valor" value={editedEvent.valor} onChange={handleInputChange} /></p>
              <p>Descrição: <textarea className="descricao" name="descricao" value={editedEvent.descricao} onChange={handleInputChange} rows="4" cols="50" /></p>
              <p>Requisitos: <textarea className="requisitos" name="requisitos" value={editedEvent.requisitos} onChange={handleInputChange} rows="5" cols="50" /></p>
            </div>
            <div className="modal-footer">
              <button className="save-button" onClick={handleSaveEvent}>Salvar</button>
              <button className="cancel-button" onClick={handleCloseModal}>Cancelar</button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default EventList;
