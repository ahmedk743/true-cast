import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { COLORS } from "../../../../constants/theme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Fake", "Real"];

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Real & Fake news count",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: "transparent",
      },
    },
    y: {
      grid: {
        display: false,
        borderColor: "transparent",
      },
    },
  },
};

export function BarChart({ fakeCount, realCount }: any) {
  const data = {
    labels,
    datasets: [
      {
        label: "Fake News Count",
        data: [fakeCount, realCount],
        // backgroundColor: "rgba(255, 99, 132, 0.5)",
        backgroundColor: ["red", COLORS.primaryLight],
      },
    ],
  };

  return <Bar style={{ height: 520 }} options={options} data={data} />;
}
