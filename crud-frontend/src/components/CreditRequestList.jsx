import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreditRequestList = () => {
  const [creditRequests, setCreditRequests] = useState([]);

  const fetchCreditRequests = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/credits');
      setCreditRequests(response.data);
    } catch (error) {
      console.error('Error fetching credit requests:', error);
    }
  };

  useEffect(() => {
    fetchCreditRequests();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Solicitudes de Crédito</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Monto Solicitado</th>
              <th>Estatus</th>
              <th>Razón</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            {creditRequests.map((request) => (
              <tr key={request.id}>
                <td>${request.requested_amount}</td>
                <td>{request.status}</td>
                <td>{request.reason || 'N/A'}</td>
                <td>{request.client?.name || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreditRequestList;
