import React from "react";

import "./SignUpForm.scss";

export default function SignUpForm({ setAuthStatus }) {
  return (
    <form action="">
      <label>UserName</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Email or phone number"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <button type="submit">Sign In</button>
      <button>Continue with Google</button>
      <p>Have no Account? <span>Sign Up</span></p>
    </form>
  );
}
