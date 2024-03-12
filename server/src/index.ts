import bodyParser from 'body-parser';

import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import images from './routes/images';

const app: Application = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/', images);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


export default app;
