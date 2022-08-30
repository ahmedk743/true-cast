import { faAd, faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { COLORS } from "../../constants/theme";

function Footer() {
  return (
    <footer className="">
      <div>
        <div
          style={{
            boxShadow: "0px 1px 3px gray inset",
            marginRight: -2,
            marginLeft: -2,
          }}
          className="navbar-brand"
        >
          <a
            className="navbar-item"
            style={{ display: "flex", flexDirection: "row" }}
            href="javascript:void(0)"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={require("../../assets/images/afwa.png")}
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="28"
              height="28"
            />
            <div style={{ marginLeft: 10, fontWeight: "700", fontSize: 30 }}>
              True Cast
            </div>
          </a>
        </div>
      </div>
      <div
        className="pl-5 pr-5"
        style={{
          backgroundColor: COLORS.primary,
          height: 250,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ alignSelf: "flex-end", marginBottom: 25 }}>
          <p
            style={{
              color: "white",
              maxWidth: 250,
              fontSize: 12,
            }}
          >
            Working for prevention of the widespread of fakenews and
            misinformation using Machine learning & Artificial Intelligence
            <br />
            Copyright © 2022 True Cast
          </p>
          <div style={{ marginTop: 15 }}>
            <img
              src={require("../../assets/images/facebook.png")}
              style={{
                borderRadius: 50,
                width: 35,
                height: 35,
                marginRight: 20,
                cursor: "pointer",
              }}
            />
            <img
              src={require("../../assets/images/twitter.png")}
              style={{
                borderRadius: 50,
                width: 35,
                height: 35,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div
          style={{
            height: 200,
            width: 300,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <div
            style={{
              borderBottom: `1px solid ${COLORS.primary}`,
              alignSelf: "flex-start",
            }}
          >
            <p style={{ fontSize: 20, color: COLORS.primary, fontWeight: 700 }}>
              Stay In Touch
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              className="input"
              placeholder="Enter your email"
            />
            <button
              style={{
                backgroundColor: COLORS.primary,
                color: "white",
                marginTop: 8,
              }}
              className="button"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
