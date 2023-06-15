require('dotenv').config();
import express from 'express';
import router from './router';
import cors from 'cors';

const HOST = process.env.HOST as unknown as string;
const PORT = process.env.PORT as unknown as number;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});