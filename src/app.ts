import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectMongo } from './util/dbConnect';
import { CLIENT_URL } from './util/config';
import testRouter from './routes/test';

const app: Express = express();

// ------------MIDDLEWARE---------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// -----------CORS MIDDLEWARE--------
app.use(
    cors({
        origin: CLIENT_URL,
        credentials: true,
    })
);

// -----------ROUTES----------------
app.use('/test', testRouter);

export default app;
