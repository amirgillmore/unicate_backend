import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import profilesRouter from './routes/profiles';
import postsRouter from './routes/posts';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/profiles', profilesRouter);
app.use('/api/posts', postsRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend API running on port ${port}`);
});