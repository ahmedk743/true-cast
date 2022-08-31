import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

function VerifyEmail() {
  const { user } = useAuth();
  const { state }: any = useLocation();
  return (
    <div
      className="hero is-fullscreen is-centered"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight - 200,
      }}
    >
      <div className="title ">Verify Email</div>
      <div className="subtitle mt-2">
        An email has been sent to your email address{" "}
        <strong>{user?.email || state?.email}</strong> please verify and refresh
        here to login!
      </div>
    </div>
  );
}

export default VerifyEmail;
