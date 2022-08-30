import React from "react";
import Card from "../../../../common/Card/Card";

let title = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
euismod, nisi vel consectetur interdum, nisl nisi aliquam nisi,
euismod euismod nisi vel nisi.`;

function PredictionResultList({ results }: any) {
  return (
    <Card>
      <div className="subtitle" style={{ fontWeight: "700" }}>
        Related Results Found
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Source</th>
            <th>Published</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result: any, index: number) =>
            result.related.length > 0 ? (
              result.related.map((related: any, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <abbr
                    style={{
                      border: "none",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    title={related.title}
                  >
                    {related.title.length > 40
                      ? related.title.substring(0, 40) + "..."
                      : related.title}
                  </abbr>
                  <td>{related.source}</td>
                  <td>{related.time}</td>
                  <td>
                    <a href={related.link} target="_blank">
                      Read more
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr key={index}>
                <td>{index + 1}</td>
                <abbr
                  style={{
                    border: "none",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  title={result.title}
                >
                  {result.title.length > 50
                    ? result.title.substring(0, 50) + "..."
                    : result.title}
                </abbr>
                <td>{result.source}</td>
                <td>{result.time}</td>
                <td>
                  <a href={result.link} target="_blank">
                    Read more
                  </a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Card>
  );
}

export default PredictionResultList;

/**
 * title: "The news headline is",
    description: "The news headline is",
    image: "https://via.placeholder.com/150",
    url: "https://via.placeholder.com/150",
    date: "12-08-2022",
 */
