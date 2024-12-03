import * as clientService from '../services/clientService.js';

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const createClient = async (req, res) => {
  try {
    const client = await clientService.createClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
