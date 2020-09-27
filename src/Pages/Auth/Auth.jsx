import React from "react";

import "./Auth.scss";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import SignInForm from "./SignInForm";

export default function Auth() {
  return (
    <div className="auth">
      <AuthHeader />
      <main>
        <h1>Memories</h1>
        <SignInForm/>
      </main>

      <AuthFooter />
    </div>
  );
}
