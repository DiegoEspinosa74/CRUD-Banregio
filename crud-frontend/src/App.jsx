import React, { useState, useEffect } from 'react';
import ClientList from './components/ClientList';
import ModalForm from './components/ModalForm';
import axios from 'axios';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Sistema de Créditos</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-success mb-4"
      >
        Agregar Cliente
      </button>
      <ClientList clients={clients} />
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fetchClients={fetchClients}
      />
    </div>
  );
};

export default App;
