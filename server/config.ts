require('dotenv').config({ path: '../.env' });

const HOST = process.env.HOST_NAME || 'localhost';
const PORT = Number(process.env.PORT_NUMBER) || 3000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

module.exports = {
  HOST,
  PORT,
  OPENAI_API_KEY,
};
