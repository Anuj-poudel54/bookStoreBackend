import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouter from './apiController.js';

const app = express();
const PORT = '3000';

// Using middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.use('', apiRouter);


// Serving listening
app.listen(PORT, () => {
    console.log("Listening at ", PORT);
});