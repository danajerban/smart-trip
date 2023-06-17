require('dotenv').config({ path: '../.env' });
import express from 'express';
import router from './router';
import cors from 'cors';

const HOST = process.env.HOST_NAME || 'localhost';
const PORT = Number(process.env.PORT_NUMBER) || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

router.get('*', (_req: express.Request, res: express.Response) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
