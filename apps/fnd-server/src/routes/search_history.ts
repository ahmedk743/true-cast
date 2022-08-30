import { SearchHistory } from "./../entity/SearchHistory";
import { User } from "../entity/User";

const express = require("express");
const router = express.Router();

router.post("/saveHeadline", async (req, res) => {
  try {
    const curUser = await User.findOne({
      where: { username: req.user.username },
    });
    // save invoice
    const { headline } = req.body;

    const newHistory = SearchHistory.create({
      headline,
      user: curUser,
    });

    await newHistory.save();

    res.send("success");
  } catch (error) {
    res.send("error");
  }
});

router.get("/getHeadlines", async (req, res) => {
  try {
    const curUser = await User.findOne({
      where: { username: req.user.username },
    });

    let history = await SearchHistory.find({ relations: ["user"] });
    history = history?.filter((h) => h.user.id === curUser.id);

    res.send(history);
  } catch (error) {
    res.send("error");
  }
});

router.post("/deleteHeadline", async (req, res) => {
  try {
    const curUser = await User.findOne({
      where: { username: req.user.username },
    });

    const { headline } = req.body;
    const history = await SearchHistory.findOne({
      where: { headline: headline },
    });

    if (history) {
      await history.remove();
      res.send("success");
    } else {
      res.send("error");
    }
  } catch (error) {
    res.send("error");
  }
});

export { router as search_history };
