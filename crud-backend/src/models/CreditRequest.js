import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Client from './Client.js';

const CreditRequest = sequelize.define('CreditRequest', {
  requested_amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('approved', 'rejected', 'in_process'),
    defaultValue: 'in_process',
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Client.hasMany(CreditRequest, { foreignKey: 'client_id' });
CreditRequest.belongsTo(Client, { foreignKey: 'client_id' });

export default CreditRequest;
