import React from "react";

import AuthLogo from "./AuthLogo";
import AuthNavigation from "./AuthNavigation";

export default function AuthHeader() {
  return (
    <div className="auth-header">
      <AuthLogo />
      <AuthNavigation />
    </div>
  );
}
