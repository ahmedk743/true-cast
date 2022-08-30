import bcrypt = require("bcryptjs");
const express = require("express");

import { User } from "../entity/User";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req?.body;
  if (
    !username ||
    !password ||
    typeof username !== "string" ||
    typeof password !== "string"
  ) {
    res.send("Improper Values");
    return;
  }
  const user = await User.findOne({ where: { username: username } });

  if (user) res.send("User Already Exists");
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = User.create({
      username,
      password: hashedPassword,
      email: "",
      firstName: "",
      lastName: "",
    });

    await newUser.save();

    res.send("success");
  }
});

export { router as register };
