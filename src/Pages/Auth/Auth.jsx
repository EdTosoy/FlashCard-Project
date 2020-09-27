import React, { useState } from "react";

import "./Auth.scss";
import AuthFooter from "./AuthFooter";
import AuthHeader from "./AuthHeader";
import SignInForm from "./SignInForm";
import { useState } from "react";
import SignUpForm from "./SignUpForm";

export default function Auth() {
  const [authStatus, setAuthStatus] = useState(false);
  return (
    <div className="auth">
      <AuthHeader />
      <main>
        <h1>Memories</h1>
        
        {authStatus ? <SignInForm setAuthStatus={setAuthStatus}/> : <SignUpForm setAuthStatus={setAuthStatus} />}
      </main>

      <AuthFooter />
    </div>
  );
}
