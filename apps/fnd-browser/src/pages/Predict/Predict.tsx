import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../../utils/globalStyles";
import {
  Charts,
  ChooseType,
  SearchSection,
  TrendingNews,
  TrendingWorldwide,
} from "./components/Dataset";
import { Nav } from "rsuite";
import RealTimePrediction from "./components/RealTimePrediction";
import { showNotification } from "@mantine/notifications";

axios.defaults.withCredentials = false;

function Predict() {
  const [progress, setProgress] = useState<boolean>();
  const [fbProgress, setFbProgress] = useState<boolean>();
  const [twProgress, setTwProgress] = useState<boolean>();
  const [result, setResult] = useState<any>();
  const [totalScore, setTotalScore] = useState<any>(0);
  const [articlesResult, setArticlesResult] = useState<any>([]);
  const [fbResults, setFbResult] = useState<any>([]);
  const [news, onChangeNews] = useState<any>("");

  const [active, setActive] = useState("realTime");

  const [totalArticles, setTotalArticles] = React.useState<any>();

  React.useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?lang=en&country=pk&token=a75dc3059cdd76e16af0e2012625bae1"
      //   `https://gnews.io/api/v4/search?q="${test}"&lang=en&country=pk&token=a75dc3059cdd76e16af0e2012625bae1`
    )
      .then(function (response) {
        //
        return response.json();
      })
      .then(function (data) {
        setTotalArticles(data?.totalArticles);
      });
  }, []);

  const renderActiveTab = () => {
    switch (active) {
      case "realTime":
        return (
          <RealTimePrediction
            score={totalScore}
            results={articlesResult}
            totalArticles={totalArticles}
            articlesSearchedLength={articlesResult.length}
            fbSearchedLength={fbResults.length}
          />
        );
      case "dataset":
        return (
          <div
            style={{
              marginRight: 160,
              marginLeft: 180,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Charts result={result} totalArticles={totalArticles} />
          </div>
        );
    }
  };

  const predictNews = () => {
    axios.defaults.withCredentials = false;
    setProgress(true);
    axios
      .post("http://localhost:5000/prediction", {
        news,
      })
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
        // setResult("REAL");
      })
      .catch((err) => {
        showNotification({
          color: "red",
          message: `${err}`,
          icon: <FontAwesomeIcon icon={faTimes} />,
          autoClose: 2000,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setProgress(false);
        }, 2000);
      });
  };
  const stopwords = [
    "i",
    "me",
    "my",
    "myself",
    "we",
    "our",
    "ours",
    "ourselves",
    "you",
    "your",
    "yours",
    "yourself",
    "yourselves",
    "he",
    "him",
    "his",
    "himself",
    "she",
    "her",
    "hers",
    "herself",
    "it",
    "its",
    "itself",
    "they",
    "them",
    "their",
    "theirs",
    "themselves",
    "what",
    "which",
    "who",
    "whom",
    "this",
    "that",
    "these",
    "those",
    "am",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "have",
    "has",
    "had",
    "having",
    "do",
    "does",
    "did",
    "doing",
    "a",
    "an",
    "the",
    "and",
    "but",
    "if",
    "or",
    "because",
    "as",
    "until",
    "while",
    "of",
    "at",
    "by",
    "for",
    "with",
    "about",
    "against",
    "between",
    "into",
    "through",
    "during",
    "before",
    "after",
    "above",
    "below",
    "to",
    "from",
    "up",
    "down",
    "in",
    "out",
    "on",
    "off",
    "over",
    "under",
    "again",
    "further",
    "then",
    "once",
    "here",
    "there",
    "when",
    "where",
    "why",
    "how",
    "all",
    "any",
    "both",
    "each",
    "few",
    "more",
    "most",
    "other",
    "some",
    "such",
    "no",
    "nor",
    "not",
    "only",
    "own",
    "same",
    "so",
    "than",
    "too",
    "very",
    "s",
    "t",
    "can",
    "will",
    "just",
    "don",
    "should",
    "now",
  ];

  function remove_stopwords(str: string) {
    let res = [];
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word_clean = words[i].split(".").join("");
      if (!stopwords.includes(word_clean)) {
        res.push(word_clean);
      }
    }
    return res.join(" ");
  }

  function editDistance(s1: string, s2: string) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  function similarity(s1: string, s2: string) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / longerLength;
  }

  const startNlp = (articleTitles: any, fbTitles: any) => {
    console.log(articleTitles);

    const news_removed_stopwords = remove_stopwords(news);
    console.log("news_removed_stopwords", news_removed_stopwords);

    // const similar = similarity(news_removed_stopwords, articleTitles[0]);
    let similarityWithArticles = 0;
    let similarityWithFacebook = 0;
    articleTitles.forEach((title: string) => {
      // @ts-ignore
      similarityWithArticles += stringSimilarity.compareTwoStrings(
        news_removed_stopwords,
        remove_stopwords(title || "")
      );
    });
    fbTitles.forEach((title: string) => {
      // @ts-ignore
      similarityWithFacebook += stringSimilarity.compareTwoStrings(
        news_removed_stopwords,
        remove_stopwords(title || "")
      );
    });
    let similarityWithArticlesAvg =
      similarityWithArticles /
      (articleTitles.length === 0 ? 1 : articleTitles.length);

    let similarityWithFacebookAvg =
      similarityWithFacebook / (fbTitles.length === 0 ? 1 : fbTitles.length);

    console.log("similarityWithArticlesAvg", similarityWithArticlesAvg, "%");
    console.log("similarityWithFacebookAvg", similarityWithFacebookAvg, "%");
    // if (fbTitles.length === 0) {
    setTotalScore(similarityWithArticlesAvg);
    // } else {
    //   let totalAvg =
    //     (similarityWithArticlesAvg + similarityWithFacebookAvg) / 2;
    //   setTotalScore(totalAvg);
    //   console.log("totalAvg", totalAvg, "%");
    // }
  };

  const predictRealTime = () => {
    setProgress(true);
    startNlp([], []);
    // fetch(
    //   "https://gnews.io/api/v4/top-headlines?lang=en&country=pk&token=a75dc3059cdd76e16af0e2012625bae1"
    //   // `https://gnews.io/api/v4/search?q="${news}"&lang=en&country=pk&token=a75dc3059cdd76e16af0e2012625bae1`
    // )
    //   .then(function (response) {
    //     //
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //     let newsTemp: any = [];
    //     data.articles.forEach((article: any) => {
    //       newsTemp.push({
    //         id: newsTemp.length + 1,
    //         title: article.title,
    //         description: article.description,
    //         image: article.image,
    //         url: article.url,
    //         date: article.publishedAt,
    //       });
    //     });
    //     setArticlesResult(newsTemp);
    //     newsTemp = Object.entries(newsTemp).map((e: any) => {
    //       return e[1]?.title;
    //     });
    //     startNlp(newsTemp, []);
    //   })
    //   .finally(() => {
    // setProgress(false);
    //   });
    // scrape
    let articleTitles: any = [],
      fbTitles: any = [];
    setProgress(true);
    axios
      .post("http://localhost:4000/api/scrape", {
        query: news,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data !== "error") {
          setArticlesResult(res.data);
          let ifRelated = res.data.find((e: any) => e.related.length > 0);
          console.log(ifRelated);
          if (ifRelated) {
            articleTitles = Object.entries(ifRelated.related).map((e: any) => {
              return e[1]?.title;
            });
            console.log("ifRelated", articleTitles);
          } else {
            articleTitles = Object.entries(res.data).map((e: any) => {
              return e[1]?.title;
            });
          }
        } else {
          setArticlesResult([]);
        }
      })
      .finally(() => {
        setProgress(false);
        setFbProgress(true);
        axios
          .get("http://localhost:5000/fb_scrape")
          .then((res) => {
            console.log(res.data);
            setFbResult(res.data);
            fbTitles = Object.entries(res.data).map((e: any) => {
              return e[1]?.content;
            });
          })
          .catch((err) => {
            console.log("Error in Fb scraper", err);
            setFbResult([]);
          })
          .finally(() => {
            setFbProgress(false);
            setTwProgress(true);
            setTimeout(() => {
              startNlp(articleTitles, fbTitles);
              setTwProgress(false);
              // startNlp();
            }, 1000);
          });
      });
  };

  const whichScraperLoading = () => {
    if (progress) {
      return "Checking news articles...";
    } else if (fbProgress) {
      return "Checking Facebook...";
    } else if (twProgress) {
      return "Checking Twitter...";
    }
  };

  return (
    <div style={{ ...globalStyles.screenWrapper, backgroundColor: "#fff1" }}>
      <img
        className="demo-bg"
        src={require("../../assets/images/Wallie.png")}
        alt=""
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Nav
          style={{
            fontSize: 24,
          }}
          appearance="subtle"
          activeKey={active}
          onSelect={(value: string) => {
            setActive(value);
          }}
        >
          <Nav.Item eventKey="realTime">RealTime</Nav.Item>
          <Nav.Item eventKey="dataset">Dataset</Nav.Item>
        </Nav>
      </div>
      <SearchSection
        title={
          active == "realTime"
            ? "Enter a news headline"
            : "Enter a news headline"
        }
        subtitle={
          active == "realTime"
            ? "Search a news headline to check it's credibility from Facebook, Twitter & different trusted sources"
            : "Search for a news accuracy from past years which depends upon the model trained on a dataset"
        }
        onSearchClick={async () => {
          console.log(news);

          if (news.trim().length === 0) {
            showNotification({
              color: "red",
              message: `Please enter a news headline`,
              icon: <FontAwesomeIcon icon={faTimes} />,
              autoClose: 2000,
            });
            console.log("Please enter a news headline");
            setProgress(undefined);
            return;
          }
          if (active === "realTime") {
            predictRealTime();
          } else {
            predictNews();
          }
        }}
        news={news}
        onChangeNews={onChangeNews}
      />
      <div className="columns is-gapless">
        <div
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div id="results" style={{ height: 140 }} />

          {/* <Charts /> */}
          {progress !== undefined &&
            (progress || fbProgress || twProgress ? (
              <div
                className="has-text-centered"
                style={{
                  marginBottom: 350,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "90%", marginBottom: 400 }}>
                  <p
                    className="subtitle"
                    style={{ color: "gray", marginBottom: 15 }}
                  >
                    {whichScraperLoading()}
                  </p>
                  <Progress
                    value={100}
                    // label={`${progress}%`}
                    size="xl"
                    radius="xl"
                    striped
                    animate
                  />
                </div>
              </div>
            ) : (
              renderActiveTab()
            ))}
          <div
            style={{
              marginRight: 40,
              marginLeft: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TrendingNews />
          </div>
        </div>

        {/* <div className="column is-one-quarter">
          <TrendingWorldwide />
        </div> */}
      </div>
    </div>
  );
}

export default Predict;

// <Charts result={{ ...result }} />
