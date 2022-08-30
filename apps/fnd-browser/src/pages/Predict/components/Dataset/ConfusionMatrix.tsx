import React from "react";
import Card from "../../../../common/Card/Card";

function ConfusionMatrix({ matrix }: any) {
  return (
    <Card style={{ marginTop: 15 }}>
      <div>Confusion Matrix</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "#98B9F2",
              flex: 1,
              border: "1px solid white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            {matrix && matrix[0][0]}
          </div>
          <div
            style={{
              backgroundColor: "#DE7C5A",
              flex: 1,
              border: "1px solid white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            {matrix && matrix![0][1]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "#DE7C5A",
              flex: 1,
              border: "1px solid white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            {matrix && matrix![1][0]}
          </div>
          <div
            style={{
              backgroundColor: "#98B9F2",
              flex: 1,
              border: "1px solid white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            {matrix && matrix![1][1]}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ConfusionMatrix;
