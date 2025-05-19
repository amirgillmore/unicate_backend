import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import exampleRouter from './routes/example';
import 'dotenv/config';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/example', exampleRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend API running on port ${port}`);
});