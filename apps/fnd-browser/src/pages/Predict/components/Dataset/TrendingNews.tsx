import {
  faClock,
  faExternalLinkAlt,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import Card from "../../../../common/Card/Card";

const NEWS = [
  {
    id: 1,
    title: "The news headline is",
    description: "The news headline is",
    image: "https://via.placeholder.com/150",
    url: "https://via.placeholder.com/150",
    date: "12-08-2022",
  },
  {
    id: 2,
    title: "The news headline is",
    description: "The news headline is",
    image: "https://via.placeholder.com/150",
    url: "https://via.placeholder.com/150",
    date: "12-08-2022",
  },
  {
    id: 3,
    title: "The news headline is",
    description: "The news headline is",
    image: "https://via.placeholder.com/150",
    url: "https://via.placeholder.com/150",
    date: "12-08-2022",
  },
];

function TrendingNews() {
  const [news, setNews] = React.useState<any>([]);

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

  const test = remove_stopwords(
    "US ambassador-Imran Khan secret video call happened on August 4 at around 1:45 pm to 2:15 pm"
  );

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
        console.log(data);
        let newsTemp: any = [];
        data.articles.forEach((article: any) => {
          newsTemp.push({
            id: newsTemp.length + 1,
            title: article.title,
            description: article.description,
            image: article.image,
            url: article.url,
            date: article.publishedAt,
            source: article.source.name,
          });
        });

        setNews(newsTemp);
      })
      .finally(() => {
        fetch(
          "https://gnews.io/api/v4/top-headlines?lang=en&token=a75dc3059cdd76e16af0e2012625bae1"
        )
          .then(function (response) {
            //
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            let newsTemp: any = [];
            data.articles.forEach((article: any) => {
              newsTemp.push({
                id: newsTemp.length + 1,
                title: article.title,
                description: article.description,
                image: article.image,
                url: article.url,
                date: article.publishedAt,
                source: article.source.name,
              });
            });

            setNews((prev: any) => {
              return [...prev, ...newsTemp];
            });
          });
      });
  }, []);

  return (
    <div className="mt-6 mb-6 ml-6">
      <h1 className="title ml-3">Stories for you</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {news && news.length > 0 ? (
          news.map((news: any) => (
            <Card
              style={{
                height: 190,
                width: 350,
                margin: 15,
                padding: 15,
              }}
            >
              <div className="columns">
                <div className="column is-half">
                  <div>
                    <div
                      className=""
                      style={{
                        fontSize: 12,
                        fontWeight: "700",
                        color: "black",
                        textAlign: "start",
                      }}
                    >
                      {news.title.length > 60
                        ? news.title.substring(0, 60) + "..."
                        : news.title}
                    </div>
                    <div
                      className=""
                      style={{
                        fontSize: 11,
                        color: "gray",
                        textAlign: "start",
                      }}
                    >
                      {news.description.length > 60
                        ? news.description.substring(0, 60) + "..."
                        : news.description}
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <img
                    style={{ borderRadius: 25, height: 120, width: 150 }}
                    src={news.image}
                    alt={news.title}
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faNewspaper} color="#ccc" />
                  <span
                    className="subtitle"
                    style={{ fontSize: 10, marginLeft: 5 }}
                  >
                    {news.source}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faClock} color="#ccc" />
                  <span
                    className="subtitle"
                    style={{ fontSize: 10, marginLeft: 5 }}
                  >
                    {moment(news.date).fromNow()}
                  </span>
                </div>
                <a
                  href={news.url}
                  target="_blank"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} color="#ccc" />
                  <span
                    className="subtitle"
                    style={{ fontSize: 10, marginLeft: 5 }}
                  >
                    Read More
                  </span>
                </a>
              </div>
            </Card>
          ))
        ) : (
          <div className="ml-3">No news found</div>
        )}
      </div>
    </div>
  );
}

export default TrendingNews;
