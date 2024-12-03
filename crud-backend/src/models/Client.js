import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Client = sequelize.define('Client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rfc: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  monthly_income: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

export default Client;
