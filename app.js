import express from 'express';
import { PORT, DB_URI, NODE_ENV } from './config/env.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import connectDB from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middlewares.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(errorMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('My API Backend');
});

app.use('/api/v1/subscription', subscriptionRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);

app.listen(5500, async () => {
    console.log('Server is running on port', `http://localhost:${PORT}`);
    console.log(`Server is running on ${NODE_ENV} mode`);
    console.log(`Server is running on ${PORT} port`);
    console.log(`Server is running on ${DB_URI} URI`);
    await connectDB();
})
export default app;

// qwerty123!@#
// asifraja023
// user1
// Q1yjoQGVXtDqq8o4
