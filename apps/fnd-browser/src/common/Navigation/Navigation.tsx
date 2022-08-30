import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../constants/theme";
import { useAuth } from "../../contexts";

import "./assets/vendor/bootstrap/css/bootstrap.css";
import "./assets/vendor/boxicons/css/boxicons.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/css/style.css";
import { showNotification } from "@mantine/notifications";
import { useWindowScroll } from "@mantine/hooks";

function Navigation() {
  const { user } = useAuth();
  const [scroll, scrollTo] = useWindowScroll();
  const location = useLocation();

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      {scroll.y === 0 && location.pathname !== "/predict" && (
        <section
          data-aos="fade"
          id="topbar"
          className="d-flex align-items-center"
        >
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:truecast@gmail.com">truecast@gmail.com</a>
              </i>
              {/* <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+923355836212</span>
              </i> */}
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      )}

      <header
        id="header"
        className={`d-flex align-items-center`}
        style={{ height: scroll.y === 0 ? 90 : 60 }}
      >
        {/* <div className="container d-flex align-items-center">
          <a href="index.html" className="logo">
            <img src="assets/img/favicon.png" />
          </a>
          <h1 className="logo">
            <a href="index.html">TrueCast</a>
          </h1>
        </div> */}
        <a
          className="container d-flex align-items-center ml-2"
          href="http://localhost:3000"
        >
          <img
            src={require("../../assets/images/afwa.png")}
            alt="Bulma: a modern CSS framework based on Flexbox"
            width="28"
            height="28"
          />
          <div style={{ marginLeft: 10, fontWeight: "700", fontSize: 30 }}>
            TrueCast
          </div>
        </a>
        <div className="mr-5" style={{ width: "35%" }}>
          <nav id="navbar" className="navbar d-flex  ">
            <Link className="navbar-item" to={{ pathname: "/" }}>
              Home
            </Link>
            <Link className="navbar-item" to={{ pathname: "/predict" }}>
              Predict
            </Link>
            <Link className="navbar-item" to={{ pathname: "/about-us" }}>
              About Us
            </Link>
            {user ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <a
                  className="navbar-link"
                  href="#"
                  style={{ textTransform: "capitalize" }}
                >
                  {user?.username}
                </a>
                <div className="navbar-dropdown is-boxed is-right">
                  <div
                    style={{ cursor: "pointer" }}
                    className="navbar-item is-active"
                    onClick={() => {
                      axios
                        .get("http://localhost:4000/api/logout", {
                          withCredentials: true,
                        })
                        .then(
                          (res) => {
                            if (res.data === "success") {
                              window.location.reload();
                            }
                          },
                          (err) => {
                            showNotification({
                              color: "red",
                              message: `${err}`,
                              icon: <FontAwesomeIcon icon={faTimes} />,
                              autoClose: 2000,
                            });
                          }
                        );
                    }}
                  >
                    Log Out
                  </div>
                </div>
              </div>
            ) : (
              <Link className="navbar-item" to={{ pathname: "/login" }}>
                LogIn/SignUp
              </Link>
            )}
          </nav>
        </div>
      </header>
      {/* <nav
        className="navbar has-shadow is-light"
        // className="navbar "
        style={{
          position: "sticky",
          top: 0,
          // backgroundColor: "#004f2466",
          zIndex: 999,
        }}
      >
        <div className="navbar-brand ml-4">
          <a className="navbar-item" href="http://localhost:3000">
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
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end mr-5">
            <Link className="navbar-item" to={{ pathname: "/" }}>
              Home
            </Link>
            <Link className="navbar-item" to={{ pathname: "/predict" }}>
              Predict
            </Link>
            <Link className="navbar-item" to={{ pathname: "/about-us" }}>
              About Us
            </Link>
            {user ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <a
                  className="navbar-link"
                  href="#"
                  style={{ textTransform: "capitalize" }}
                >
                  {user?.username}
                </a>
                <div className="navbar-dropdown is-boxed is-right">
                  <div
                    style={{ cursor: "pointer" }}
                    className="navbar-item is-active"
                    onClick={() => {
                      axios
                        .get("http://localhost:4000/api/logout", {
                          withCredentials: true,
                        })
                        .then(
                          (res) => {
                            if (res.data === "success") {
                              window.location.reload();
                            }
                          },
                          (err) => {
                            showNotification({
                              color: "red",
                              message: `${err}`,
                              icon: <FontAwesomeIcon icon={faTimes} />,
                              autoClose: 2000,
                            });
                          }
                        );
                    }}
                  >
                    Log Out
                  </div>
                </div>
              </div>
            ) : (
              <Link className="navbar-item" to={{ pathname: "/login" }}>
                LogIn/SignUp
              </Link>
            )}

            {/* <div className="navbar-item has-dropdown is-hoverable">
            <a
              className="navbar-link"
              href="https://bulma.io/documentation/overview/start/"
            >
              Docs
            </a>
            <div className="navbar-dropdown is-boxed">
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/overview/start/"
              >
                Overview
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/overview/modifiers/"
              >
                Modifiers
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/columns/basics/"
              >
                Columns
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/layout/container/"
              >
                Layout
              </a>
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Form
              </a>
              <hr className="navbar-divider" />
              <a
                className="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Elements
              </a>
              <a
                className="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div> 
          </div>
        </div>
      </nav> */}
    </div>
  );
}

export default Navigation;
