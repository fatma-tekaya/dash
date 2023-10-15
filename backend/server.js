import offerRoute from './routes/offerRoute.js'
import userRoute from './routes/userRoutes.js'
import condidatRoute from './routes/condidatRoute.js'
import clientRoute from './routes/clientRoute.js'
import infoRoute from './routes/infoRoute.js'
import questionRoute from './routes/questionRoute.js'

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import { Server } from 'socket.io';



dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
const httpServer = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
// Middleware pour activer CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Autoriser l'origine spécifique
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
// Socket.io setup using the http server
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },

});
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Your routes go here...
app.get('/', (req, res) => res.send('Server is ready'));
app.use('/api/offer', offerRoute);
app.use('/api/question', questionRoute);
app.use('/api/users', userRoute);
app.use('/api/condidat', condidatRoute);
app.use('/api/client', clientRoute);
app.use('/api/info', infoRoute);
app.use(notFound);
app.use(errorHandler);
app.set('io', io);
