import React from 'react'
import { useAuth } from './../AuthContext'

import LoginForm from './LoginForm'

const LoginPage = () => {
    const { login } = useAuth()

    return (
        <div className="row">
            <h1>Welcome</h1>
            <LoginForm onSubmit={login} />
        </div>
    )
}

export default LoginPage
