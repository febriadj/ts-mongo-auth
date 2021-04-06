import express from 'express';
import session from 'express-session';
import { config as dotenv } from 'dotenv'

import router from './routes/index';
import runMongo from './config/database'

const 
  app = express()
, port: string | number = process.env.PORT || 5000;

app.use(session({
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: true
}))

dotenv({ path: './.env' })
app.use(router); // semua router

runMongo()

app.listen(port, () => {
  console.log('Server Running On Port:' + port);
});