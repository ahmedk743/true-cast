import React from "react";
import { globalStyles } from "../../utils/globalStyles";

function Error404() {
  return (
    <div style={{ ...globalStyles.screenWrapper }}>
      <img
        src={require("../../assets/images/404.png")}
        style={{ width: "90%" }}
        alt="404"
      />
    </div>
  );
}

export default Error404;
