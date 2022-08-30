import passport from "../passport";

const express = require("express");

const router = express.Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("success");
});

export { router as login };
