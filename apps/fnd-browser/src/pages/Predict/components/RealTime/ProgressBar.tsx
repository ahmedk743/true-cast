import React from "react";
import Card from "../../../../common/Card/Card";
import { CircularProgressbar } from "react-circular-progressbar";
import { COLORS } from "../../../../constants/theme";
import { RingProgress, Text, Center, ThemeIcon } from "@mantine/core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GaugeChart from "react-gauge-chart";

// let percentage = 0.5;

function ProgressBar({ score: percentage }: any) {
  return (
    <Card style={{ width: 400, height: 300 }}>
      <div className="subtitle" style={{ fontWeight: "700" }}>
        Accuracy Meter
      </div>

      <GaugeChart
        id="gauge-chart"
        textColor="#333"
        nrOfLevels={3}
        arcsLength={[0.2, 0.3, 0.5]}
        colors={[COLORS.red, "#F5CD19", COLORS.primaryLight]}
        percent={percentage}
        arcPadding={0.02}
      />
    </Card>
  );
}

export default ProgressBar;
