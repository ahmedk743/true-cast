import React from "react";

function Card({ children, style = {} }: any) {
  const [hasShadow, showShadow] = React.useState(false);

  return (
    <div
      onMouseOver={() => showShadow(true)}
      onMouseOut={() => showShadow(false)}
      className={hasShadow ? "card" : ""}
      // className="my-card"
      style={{
        border: "1px solid #e6e6e6",
        padding: 15,
        borderRadius: 15,
        backgroundColor: "#fff",
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 11,
        // },
        // shadowOpacity: 0.55,
        // shadowRadius: 14.78,

        // elevation: 22,
        ...style,
      }}
      // className="card"
      // style={{
      //   padding: 15,
      //   borderRadius: 15,
      //   ...style,
      // }}
    >
      {children}
    </div>
  );
}

export default Card;
