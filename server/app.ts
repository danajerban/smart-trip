import express from 'express';
import router from './router';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

router.get('*', (_req: express.Request, res: express.Response) => {
  res.status(404).send('Route not found');
});

export default app;
