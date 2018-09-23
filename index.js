require('dotenv').config();
const connectToBackend = require('./init/db');
const initializeApp = require('./init/app');

connectToBackend(process.env.DB_URL);

initializeApp({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, ttl :  process.env.REDIS_TTL}, process.env.SECRET)

