import React from "react";
import Card from "../../../../common/Card/Card";

function Vectorised({ vectors }: any) {
  console.log(vectors);

  return (
    <Card style={{ height: 550 }}>
      <div
        style={{
          fontWeight: "600",
          color: "#0009",
          fontSize: 12,
          marginBottom: 10,
        }}
      >
        CSR Sparse Matrix
      </div>
      {vectors?.map((item: any) => (
        <div style={{ fontSize: 16, fontWeight: "700", marginBottom: 8 }}>
          ({item[0]}, {item[1]}) {`-->`} {item[2]?.toFixed(2)}{" "}
        </div>
      ))}
    </Card>
  );
}

export default Vectorised;
