import CreditRequest from '../models/CreditRequest.js';
import Client from '../models/Client.js';

export const getAllCreditRequests = async () =>
  await CreditRequest.findAll({
    include: {
      model: Client,
      attributes: ['name', 'rfc', 'monthly_income'],
    },
  });

export const createCreditRequest = async (data) => await CreditRequest.create(data);
