import { Badge } from "@mantine/core";
import React from "react";
import Card from "../../../../common/Card/Card";
import { BarChart } from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import TrendingNews from "./TrendingNews";
import CountUp from "react-countup";
import Vectorised from "./Vectorised";
import ConfusionMatrix from "./ConfusionMatrix";

function Charts(props: any) {
  const {
    predict,
    c_matrix,
    dataset_size,
    score,
    fakeCount,
    realCount,
    vectors,
    totalArticles,
  }: any = props.result || {};

  return (
    <div style={{ width: "90%" }} className="ml-6">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            margin: "0px 15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span className="subtitle">The news headline is </span>
          <div style={{ marginTop: 5 }}>
            {predict !== undefined &&
              (predict === "REAL" ? (
                <Badge
                  variant="gradient"
                  size="xl"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                >
                  {predict}
                </Badge>
              ) : (
                <Badge
                  variant="gradient"
                  size="xl"
                  gradient={{ from: "orange", to: "red" }}
                >
                  {predict}
                </Badge>
              ))}
          </div>
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "15px 0px",
          }}
        >
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              margin: "15px 15px",
            }}
          >
            <div className="title">
              <CountUp className="title" end={totalArticles} />+
            </div>

            <div className="subtitle" style={{ color: "gray" }}>
              Articles Searched
            </div>
          </Card>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              margin: "15px 15px",
            }}
          >
            <div className="title" style={{ color: "gray" }}>
              <CountUp className="title" end={dataset_size} />+
            </div>
            <div className="subtitle">Dataset Size</div>
          </Card>
        </div>
      </div>
      <div className="subtitle ml-3">Performance</div>
      <div className="columns mb-6">
        <div className="column is-one-third">
          <Card>
            <DoughnutChart score={parseFloat(score)} />
          </Card>
          <ConfusionMatrix matrix={c_matrix} />
        </div>
        <div className="column is-one-third">
          <Card>
            <BarChart fakeCount={fakeCount} realCount={realCount} />
          </Card>
        </div>
        <div className="column">
          <Vectorised vectors={vectors} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
