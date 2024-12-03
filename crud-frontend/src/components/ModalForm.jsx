import React, { useState } from 'react';
import axios from 'axios';

const ModalForm = ({ isOpen, onClose, fetchClients }) => {
  const [formData, setFormData] = useState({
    name: '',
    rfc: '',
    birthdate: '',
    monthly_income: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Valida que los campos obligatorios estén completos
      if (!formData.name || !formData.rfc || !formData.birthdate || !formData.monthly_income) {
        alert('Todos los campos son obligatorios');
        return;
      }

      // Enviar datos al backend
      await axios.post('http://localhost:3000/api/clients', {
        ...formData,
        monthly_income: parseFloat(formData.monthly_income), // Asegura que el ingreso sea un número
      });

      fetchClients(); // Actualiza la lista de clientes
      onClose(); // Cierra el modal
      setFormData({
        name: '',
        rfc: '',
        birthdate: '',
        monthly_income: '',
      });
    } catch (error) {
      console.error('Error al guardar el cliente:', error);
      alert('No se pudo guardar el cliente. Intenta de nuevo.');
    }
  };

  if (!isOpen) return null; // No renderiza si el modal no está abierto

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="text-lg font-bold mb-4">Agregar Cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Nombre</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nombre del cliente"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">RFC</span>
            </label>
            <input
              type="text"
              name="rfc"
              placeholder="RFC del cliente"
              value={formData.rfc}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Fecha de Nacimiento</span>
            </label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Ingresos Mensuales</span>
            </label>
            <input
              type="number"
              name="monthly_income"
              placeholder="Ingresos mensuales"
              value={formData.monthly_income}
              onChange={handleChange}
              className="input input-bordered"
              required
            />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="button" onClick={onClose} className="btn">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
