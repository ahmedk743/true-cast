import React from "react";
import { globalStyles } from "../../utils/globalStyles";
import Sections from "./components/Sections";

function Home() {
  return (
    <div style={{ ...globalStyles.screenWrapper }}>
      {/* <img src={require("../../assets/images/sec1.png")} alt="sec1" />
      <img src={require("../../assets/images/sec2.png")} alt="sec2" />
      <img src={require("../../assets/images/sec3.png")} alt="sec3" /> */}
      <Sections />
    </div>
  );
}

export default Home;
