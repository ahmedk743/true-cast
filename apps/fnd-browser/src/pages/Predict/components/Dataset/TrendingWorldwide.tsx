import React from "react";
import Card from "../../../../common/Card/Card";

function TrendingWorldwide() {
  const [news, setNews] = React.useState<any>();

  // React.useEffect(() => {
  //   fetch(
  //     "https://gnews.io/api/v4/top-headlines?lang=en&token=a75dc3059cdd76e16af0e2012625bae1"
  //   )
  //     .then(function (response) {
  //       //
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       let newsTemp: any = [];
  //       data.articles.forEach((article: any) => {
  //         newsTemp.push({
  //           id: newsTemp.length + 1,
  //           title: article.title,
  //           description: article.description,
  //           image: article.image,
  //           url: article.url,
  //           date: article.publishedAt,
  //         });
  //       });

  //       setNews(newsTemp);
  //     });
  // }, []);

  return (
    <Card
      style={{
        marginTop: 30,
        marginLeft: 30,
        borderRadius: 15,
        marginBottom: 25,
      }}
    >
      <div style={{ textAlign: "start" }} className="subtitle">
        Trending Worldwide
      </div>
      <div
        style={{
          height: 450,
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {news && news.length > 0 ? (
          news.map((news: any) => (
            <a
              href={news.url}
              target="_blank"
              key={news.id}
              className="columns is-mobile"
            >
              <div className="column is-one-third">
                <img src={news.image} alt={news.title} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
                className="column is-two-thirds"
              >
                <div
                  className=""
                  style={{
                    fontSize: 12,
                    fontWeight: "700",
                    color: "black",
                    textAlign: "start",
                  }}
                >
                  {news.title}
                </div>
                <div
                  className=""
                  style={{ fontSize: 11, color: "gray", textAlign: "start" }}
                >
                  {news.description.length > 60
                    ? news.description.substring(0, 60) + "..."
                    : news.description}
                </div>
                <div
                  className="subtitle"
                  style={{ fontSize: 10, textAlign: "end" }}
                >
                  {news.date?.split("T")[0]}
                </div>
              </div>
            </a>
          ))
        ) : (
          <div>No news found</div>
        )}
      </div>
    </Card>
  );
}

export default TrendingWorldwide;
