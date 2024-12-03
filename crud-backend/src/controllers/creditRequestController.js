import * as creditService from '../services/creditRequestService.js';

export const getCreditRequests = async (req, res) => {
  try {
    const requests = await creditService.getAllCreditRequests();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const createCreditRequest = async (req, res) => {
  try {
    const request = await creditService.createCreditRequest(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
