import { Progress } from "@mantine/core";
import React from "react";
import Card from "../../../../common/Card/Card";
import { COLORS } from "../../../../constants/theme";

function FilteredBySources() {
  return (
    <Card>
      <div className="subtitle" style={{ fontWeight: "700" }}>
        Search Results
      </div>
      <div className="mb-4">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div>News Channels</div>
          <div style={{ color: "#999" }}>7/10</div>
        </div>
        <Progress size="lg" value={70} color={COLORS.primary} />
      </div>

      <div className="mb-4">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div>Facebook</div>
          <div style={{ color: "#999" }}>5/10</div>
        </div>
        <Progress size="lg" value={50} color={COLORS.primary} />
      </div>

      <div className="mb-4">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div>Twitter</div>
          <div style={{ color: "#999" }}>2/10</div>
        </div>
        <Progress size="lg" value={20} color={COLORS.primary} />
      </div>
    </Card>
  );
}

export default FilteredBySources;
