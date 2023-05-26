import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import CompanyList from "../companies/CompanyList";
import JobList from "../jobs/JobList";
import CompanyDetail from "../companies/CompanyDetail";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

/** Site-wide routes.
 *
 */

function AppRoutes({ login, signup }) {
  const navigate = useNavigate();
  console.debug(
    "Routes",
    `login=${typeof login}`,
    `register=${typeof register}`,
  );

  return (
    <div className="pt-5">
      <Routes>

        <Route path="/" element={<Homepage />} />

        <Route path="/login" element={<LoginForm login={login} />} />

        <Route path="/signup" element={<SignupForm signup={signup} />} />

        <Route path="/companies" element={<CompanyList />} />

        <Route path="/jobs" element={<JobList />} />

        <Route path="/companies/:handle" element={<CompanyDetail />} />

        <Route path="/profile" element={<ProfileForm />} />

        <Route path="*" element={() => {
          navigate("/");
          return null;
        }} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
