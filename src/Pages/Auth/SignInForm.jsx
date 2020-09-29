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
    </form>
  );
}
