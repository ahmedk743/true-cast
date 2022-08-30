const express = require("express");
const { createConnection } = require("typeorm");

import cookieParser = require("cookie-parser");
import cors = require("cors");
const session = require("express-session");
// var FileStore = require("session-file-store")(session);

import bodyParser = require("body-parser");
import passport from "./passport";
import { routes } from "./routes";

// const NewsAPI = require("newsapi");
// const newsapi = new NewsAPI("ba320754922840dd878129726ba4e90c");

const app = express();

app.use(
  session({
    secret: "secretcode",
    resave: true,
    // store: new FileStore({}),
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
);

const main = async () => {
  try {
    await createConnection();
    console.log("Connected to Postgres...");

    app.use(express.urlencoded({ extended: true }));

    app.use(
      cors({
        credentials: true,
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      })
    );

    app.use(cookieParser("secretcode"));
    app.use(bodyParser.json());
    app.use(bodyParser.raw());
    app.use(bodyParser.text());

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.json());

    // routes
    app.use("/api", routes);

    app.get("/api/user", (req, res) => {
      res.send(req.user);
    });

    app.get("/api/logout", (req, res) => {
      req.logout();
      res.send("success");
    });

    app.listen(4000, () => {
      console.log(`Server is running in ${process.env.NODE_ENV} mode.`);

      console.log("Server started at 4000!");
    });
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to Postgres!");
  }
};

main();
