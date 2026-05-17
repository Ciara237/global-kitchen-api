/**
 * Entry point for The Global Kitchen API.
 * Loads environment config, connects to MongoDB, mounts routes, and starts the HTTP server.
 */

require('dotenv').config();

const express = require('express');
const connectDB = require('./src/config/db');
const recipeRoutes = require('./src/routes/recipe.routes');

const app = express();

app.use(express.json());
app.use('/api/recipes', recipeRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || 'Internal server error',
  });
});

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();
