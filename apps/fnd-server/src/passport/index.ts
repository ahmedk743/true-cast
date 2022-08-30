import passport = require("passport");
import bcrypt = require("bcryptjs");
import passportLocal = require("passport-local");

import { User } from "../entity/User";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(async (username: string, password: string, done) => {
    const user = await User.findOne({ where: { username: username } });

    if (!user) return done(null, false);

    bcrypt.compare(password, user.password, (err, result: boolean) => {
      if (err) throw err;
      if (result === true) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

passport.serializeUser((user: User, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await User.findOne({ where: { id: id } });
    if (user) {
      done(null, user);
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    done(err, null);
  }
});

export default passport;
