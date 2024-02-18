const app = require('./App');
const { connectToDatabase } = require('./db');
require('dotenv').config();

const { SERVER_PORT = 8001, DB_HOST } = process.env;

const start = async () => {
  try {
    await connectToDatabase(DB_HOST);
    console.log('Database connection successful');

    app.listen(SERVER_PORT, () => {
      console.log(`Server running. Use our API on port: ${SERVER_PORT}`);
    });
  } catch (err) {
    console.error(`Failed to launch application with error: ${err.message}`);
    process.exit(1);
  }
};

start();
