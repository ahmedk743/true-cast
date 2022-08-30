import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "../../../../constants/theme";
import Card from "../../../../common/Card/Card";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ score, title }: any) {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        title: title ? "" : "Accuracy Score for Algorithm",
      },
    },
  };
  // convert score to percentage
  const accuracyPercentage: any = (score * 100).toFixed(2);

  const data = {
    labels: ["Real", "Fake"],
    datasets: [
      {
        data: [accuracyPercentage, 100 - accuracyPercentage],
        // backgroundColor: ["rgba(255, 99, 132, 1)", COLORS.primaryLight],
        backgroundColor: [COLORS.primaryLight, COLORS.red],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card>
      <div
        className="subtitle"
        style={{ fontWeight: "700", position: "absolute" }}
      >
        {title}
      </div>
      <Doughnut
        style={{ height: 250, width: 300, marginTop: 5 }}
        options={options}
        data={data}
      />
    </Card>
  );
}

export default DoughnutChart;
