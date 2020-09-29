import React from "react";

import "./SignInForm";

export default function SignInForm({ setAuthStatus }) {
  return (
    <form action="">
      <label htmlFor="username">UserName</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Sign Up</button>
      <button>Continue with Google</button>
      <p>Already have an Account? <span>Sign In</span></p>
    </form>
  );
}
