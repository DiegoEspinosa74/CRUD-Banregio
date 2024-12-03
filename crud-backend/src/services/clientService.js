import Client from '../models/Client.js';

export const getAllClients = async () => await Client.findAll();
export const createClient = async (data) => await Client.create(data);
