import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db.js';
import clientRoutes from './routes/clientRoutes.js';
import creditRoutes from './routes/creditRequestRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/clients', clientRoutes);
app.use('/api/credits', creditRoutes);

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Conexión exitosa a la base de datos.');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();
