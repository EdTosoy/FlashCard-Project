import React from 'react'
import Logo from "../../Components/Header/Logo"
import AuthNavigation from './AuthNavigation'

export default function AuthHeader() {
    return (
        <div className="auth-header">
            <Logo/>
            <AuthNavigation/>
        </div>
    )
}
34