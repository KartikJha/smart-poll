import * as dotenv from 'dotenv';
import connectToBackend from './init/db';
import initializeApp from './init/app';

dotenv.config();

connectToBackend(process.env.DB_URL);

initializeApp({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT, ttl :  process.env.REDIS_TTL}, process.env.SECRET)

