require('dotenv').config();
const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 8000;

sequelize.sync({ force: false }).then(() => {
  console.log('Base de datos sincronizada');
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
  });
});
