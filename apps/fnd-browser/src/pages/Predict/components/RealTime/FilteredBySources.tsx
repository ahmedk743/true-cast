import { Progress } from "@mantine/core";
import React from "react";
import Card from "../../../../common/Card/Card";
import { COLORS } from "../../../../constants/theme";

function FilteredBySources({ articlesSearchedLength, fbSearchedLength }: any) {
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
          <div style={{ color: "#999" }}>
            {articlesSearchedLength > 10 ? 10 : articlesSearchedLength}/10
          </div>
        </div>
        <Progress
          size="lg"
          value={
            articlesSearchedLength > 10 ? 100 : articlesSearchedLength * 10
          }
          color={COLORS.primary}
        />
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
          <div style={{ color: "#999" }}>
            {fbSearchedLength > 10 ? 10 : fbSearchedLength}/10
          </div>
        </div>
        <Progress
          size="lg"
          value={fbSearchedLength > 10 ? 100 : fbSearchedLength * 10}
          color={COLORS.primary}
        />
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
