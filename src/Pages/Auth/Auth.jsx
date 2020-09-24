import React from "react";

import "./Auth.scss";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";

export default function Auth() {
  return (
    <div className="auth">
      <AuthHeader />

      <AuthFooter />
    </div>
  );
}
