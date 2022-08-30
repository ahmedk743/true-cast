import { login } from "./login";
import { register } from "./register";
import { search_history } from "./search_history";

const googleNewsScraper = require("google-news-scraper");

const express = require("express");

const router = express.Router();

router.post(
  "/scrape",
  async (
    req: { body: { query: any } },
    res: { send: (arg0: string) => void }
  ) => {
    try {
      const { query } = req.body;
      // Execute within an async function, pass a config object (further documentation below)
      const articles = await googleNewsScraper({
        searchTerm: query,
        prettyURLs: true,
        queryVars: {
          hl: "en-US",
          gl: "PK",
          ceid: "US:en",
        },
        timeframe: "5d",
        puppeteerArgs: [],
      });

      console.log(articles);
      res.send(articles);
    } catch (error) {
      console.log("Scrapping error: ", error);
      res.send("error");
    }
  }
);

router.use(register);
router.use(login);
router.use(search_history);

export { router as routes };
