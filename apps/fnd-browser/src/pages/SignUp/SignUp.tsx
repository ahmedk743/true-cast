import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../constants/theme";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const register = (e: any) => {
    e.preventDefault();

    if (username === "") {
      showNotification({
        color: "red",
        message: "Please enter a username!",
        icon: <FontAwesomeIcon icon={faTimes} />,
        autoClose: 2000,
      });
      return;
    }

    if (password === "") {
      showNotification({
        color: "red",
        message: "Please enter a password!",
        icon: <FontAwesomeIcon icon={faTimes} />,
        autoClose: 2000,
      });
      return;
    }

    if (password !== confirmPassword) {
      showNotification({
        color: "red",
        message: "Passwords do not match!",
        icon: <FontAwesomeIcon icon={faTimes} />,
        autoClose: 2000,
      });
      return;
    }

    axios
      .post("http://localhost:4000/api/register", {
        username,
        password,
      })
      .then(
        (res: AxiosResponse) => {
          if (res.data === "success") {
            showNotification({
              color: "teal",
              title: "User created successfully!",
              message: "You are being redirected to Login Page.",
              icon: <FontAwesomeIcon icon={faCheck} />,
              autoClose: 2000,
            });
            setTimeout(() => {
              window.location.href = "/login";
            }, 1000);
          } else {
            showNotification({
              color: "red",
              message: "User already exists!",
              icon: <FontAwesomeIcon icon={faTimes} />,
              autoClose: 2000,
            });
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
  };

  const [hasShadow, showShadow] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2%",
        marginBottom: "10%",
      }}
    >
      <div className="is-centered">
        <img
          src={require("../../assets/images/afwa.png")}
          style={{ width: 100, height: 100, marginBottom: "20%" }}
        />
      </div>
      <div
        onMouseOver={() => showShadow(true)}
        onMouseOut={() => showShadow(false)}
        className={hasShadow ? "card" : ""}
        style={{ border: "1px solid #e6e6e6", borderRadius: "10px" }}
      >
        <div className="card-content">
          <div className="content">
            <h1 className="title">SignUp</h1>
            <form onSubmit={register}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="field"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <input
                  style={{
                    backgroundColor: COLORS.primary,
                    color: "#fff",
                  }}
                  className="button"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="field">
                Already have an account{" "}
                <Link to={{ pathname: "/login" }}>Login </Link>
                then
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
