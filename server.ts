import express from 'express';
import session from 'express-session';
import { config as dotenv } from 'dotenv';
import passport from 'passport';

import router from './routes/index';
import runMongo from './config/database';
import passportInit from './middleware/passport';

const 
  app = express()
, port: string | number = process.env.PORT || 5000;

app.use(session({
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: true
}));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(passport.initialize());
app.use(passport.session());

passportInit()

dotenv({ path: './.env' })
app.use(router); // semua router

runMongo()

app.listen(port, () => {
  console.log('Server Running On Port:' + port);
});