import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientList = () => {
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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Clientes</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>RFC</th>
              <th>Ingresos Mensuales</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.rfc}</td>
                <td>${client.monthly_income}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientList;
