import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { showNotification } from "@mantine/notifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../constants/theme";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async (e: any) => {
    e.preventDefault();
    const options = {
      headers: { "content-type": "application/json" },
    };
    axios.defaults.withCredentials = true;
    axios
      .post(
        "http://localhost:4000/api/login",
        {
          username,
          password,
        },
        options
      )
      .then(
        (res: AxiosResponse) => {
          if (res.status === 401) {
            showNotification({
              color: "red",
              message: "User not found!",
              icon: <FontAwesomeIcon icon={faTimes} />,
              autoClose: 2000,
            });
          }
          if (res.data === "success") {
            window.location.href = "/";
          } else {
            showNotification({
              color: "red",
              message: "Wrong Credentials!",
              icon: <FontAwesomeIcon icon={faTimes} />,
              autoClose: 2000,
            });
          }
        },
        (err) => {
          if (JSON.stringify(err).includes("401")) {
            showNotification({
              color: "red",
              message: `Cannot login, user not found! Please Signup first.`,
              icon: <FontAwesomeIcon icon={faTimes} />,
              autoClose: 2000,
            });
          } else {
            showNotification({
              color: "red",
              message: `${err}`,
              icon: <FontAwesomeIcon icon={faTimes} />,
              autoClose: 2000,
            });
          }
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
            <h1 className="title">Login</h1>
            <form onSubmit={login}>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    required
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
                    required
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="field"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: 15,
                }}
              >
                <input
                  style={{
                    backgroundColor: COLORS.primary,
                    color: "#fff",
                  }}
                  className="button"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="field">
              Don't have an account{" "}
              <Link to={{ pathname: "/signup" }}>Register </Link>
              first
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
