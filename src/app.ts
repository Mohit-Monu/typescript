import express from 'express';
import bodyParser from 'body-parser';
import todoroutes from './routes/todos'


const app=express();
app.use(bodyParser.json());
app.use(todoroutes)
app.listen(3000)