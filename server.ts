import express from 'express';
import session from 'express-session';
import { config as dotenv } from 'dotenv';
import passport from 'passport';

// meng-import file lain
import router from './routes/index';
import runMongo from './config/database';
import passportInit from './middleware/passport';

const 
  app = express()
, port: string | number = process.env.PORT || 5000;

dotenv({ path: './.env' }) // mengatur .env file

app.use(session({
  secret: String(process.env.SESSION_SECRET),
  resave: false,
  saveUninitialized: true
}));

// handle body request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middleware passport.js
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug'); // menggunakan pug sebagai template engine

app.use(router); // semua router

passportInit(); // menjalankan passport
runMongo(); // menghubungkan koneksi ke database mongodb

app.listen(port, () => {
  console.log('Server Running On Port:' + port);
});