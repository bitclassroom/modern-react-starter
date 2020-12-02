import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { isAuthenticated, login } from 'services/authService'

import { AuthContext } from './AuthContext'

function AuthProvider(props) {
    const history = useHistory()
    const [authenticated, setAuthenticated] = useState(false)
    const [session, setSession] = useState(null)

    useEffect(() => {
        setAuthenticated(isAuthenticated())
        console.log('isAuthenticated()', isAuthenticated())
    }, [])

    const loginFn = (data) => {
        const { email, password } = data

        login(email, password)
            .then((user) => {
                setSession(user)
                setAuthenticated(true)
                history.push('/')
            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    const logout = () => {
        console.log('"object"', 'object')
    }

    const loginCallback = React.useCallback(loginFn, [])
    const logoutCallback = React.useCallback(logout, [])

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                session,
                login: loginCallback,
                logout: logoutCallback,
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
