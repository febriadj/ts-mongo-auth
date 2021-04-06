import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

// users models
import Users from '../models/users';

export default async function passportInit() {
  passport.use(new LocalStrategy({ 
    usernameField: 'nameOrEmail', passwordField: 'password' 
  },
  (nameOrEmail, password, done) => {
    // mencari pengguna dengan username atau email dan password
    Users.findOne({
      $and: [
        { $or: [{ username: nameOrEmail }, { email: nameOrEmail }] },
        { password }
      ]
    }, (err: any, user: any) => {
      if (err) return done(err);

      // kondisi jika pengguna tidak ditemukan
      if (!user) {
        return done(null, false, { message: 'pengguna tidak ditemukan' });
      };

      return done(null, user);
    })
  }))

  // memberikan _id pengguna
  passport.serializeUser((user:any, done) => {
    done(null, user._id);
  })

  passport.deserializeUser((_id:string, done) => {
    Users.findOne({ _id }, (err:any, user:string) => {
      done(err, user);
    })
  })
}