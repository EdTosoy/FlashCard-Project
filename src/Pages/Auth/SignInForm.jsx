import React from 'react'

import "./SignInForm"

export default function SignInForm({setAuthStatus}) {
    return (
        <form action="">
            <label>UserName</label>
            <input type="text" name="username" id="username" placeholder="Email or phone number"/>
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder="Password"/>
        </form>
    )
}
