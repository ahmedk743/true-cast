import React from "react";
import { globalStyles } from "../../utils/globalStyles";

function AboutUs() {
  return (
    <div style={{ ...globalStyles.screenWrapper }}>
      <img src={require("../../assets/images/about_us1.png")} alt="about_us1" />
      <img src={require("../../assets/images/about_us2.png")} alt="about_us2" />
    </div>
  );
}

export default AboutUs;
