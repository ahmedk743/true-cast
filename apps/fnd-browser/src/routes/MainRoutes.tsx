import { Routes, Route } from "react-router-dom";
import { useAuth } from "../contexts";
import AboutUs from "../pages/AboutUs/AboutUs";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";
import { Login } from "../pages/Login";
import Predict from "../pages/Predict/Predict";
import { SignUp } from "../pages/SignUp";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      {/* <Route path="/" element={<ProtectedRoutes />}> */}
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Predict />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/signup" element={user ? <Home /> : <SignUp />} />
      {/* </Route> */}

      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      {/* <Route path="/login" element={<PublicRoutes />}> */}
      {/* <Route path="*" element={<Error404 />} /> */}
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
      {/* </Route> */}

      {/** Error404 route */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default MainRoutes;
