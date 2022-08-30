import { RingProgress, Text } from "@mantine/core";
import React from "react";
import Card from "../../../common/Card/Card";
import DoughnutChart from "./Dataset/DoughnutChart";
import FilteredBySources from "./RealTime/FilteredBySources";
import PredictionResultList from "./RealTime/PredictionResultList";
import ProgressBar from "./RealTime/ProgressBar";
import { Statistics } from "./RealTime/Statistics";

function RealTimePrediction({ score, results, totalArticles = 0 }: any) {
  const [value, setValue] = React.useState(27);
  return (
    <div>
      <div className="columns ml-5">
        <div className="column is-one-third">
          <FilteredBySources />
        </div>
        <div className="column is-one-third">
          <ProgressBar score={score} />
        </div>
        <div className="column">
          <DoughnutChart title="Total Accuracy Score" score={score} />
        </div>
      </div>

      <div>
        <Statistics
          data={[
            {
              title: "Total Articles Searched",
              value: totalArticles,
              diff: 0,
            },
            { title: "Total News Channels", value: results?.length, diff: 3 },
            {
              title: "Total Results",
              value: totalArticles + results?.length + 20,
              diff: 0,
            },
          ]}
        />
      </div>

      <div className="ml-5 mr-5">
        <PredictionResultList results={results} />
      </div>
    </div>
  );
}

export default RealTimePrediction;
