import bcrypt = require("bcryptjs");
const express = require("express");

import * as handlebars from "handlebars";
import * as fs from "fs";
import * as path from "path";

import { User } from "../entity/User";
const nodemailer = require("nodemailer");

const NGROK_URL = "https://c09f-39-40-77-239.eu.ngrok.io";

const router = express.Router();

const filePath = path.join(__dirname, "../assets/template.html");
const source = fs.readFileSync(filePath, "utf-8").toString();
const template = handlebars.compile(source);

router.post("/register", async (req, res) => {
  const { username, password, email } = req?.body;
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

    const replacements = {
      username: username,
      verification_link: NGROK_URL + "/api/verify/" + username,
    };
    const htmlToSend = template(replacements);

    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "a.manzoor743@gmail.com",
        pass: "roldejybcxkxenwf",
      },
    });

    let mailDetails = {
      from: "a.manzoor743@gmail.com",
      to: email,
      subject: "TrueCast Account Verification",
      // text: `Node.js testing mail for TrueCast, click this link to verify, ${NGROK_URL}/api/verify/${username}`,
      html: htmlToSend,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Send Email has Error", err);
      } else {
        console.log("Email sent successfully");
      }
    });

    const newUser = User.create({
      username,
      password: hashedPassword,
      email: email,
      firstName: "",
      lastName: "",
      verified: false,
    });

    await newUser.save();

    res.send("success");
  }
});

router.get("/verify/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Id from user verif", id);

  const user = await User.findOne({
    where: {
      username: id,
    },
  });

  console.log("This user is verified now", user);
  user.verified = true;
  await user.save();
  console.log("User logged in true", user);

  res.send("Email verified, you may log in to TrueCast!");
});

export { router as register };
