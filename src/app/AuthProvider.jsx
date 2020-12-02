import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDeepCompareEffect, useMount, usePromise } from 'react-use'
import { isAuthenticated, login } from 'services/authService'

import { AuthContext } from './AuthContext'

function AuthProvider(props) {
    const history = useHistory()
    const [authenticated, setAuthenticated] = useState(false)
    const [session, setSession] = useState(null)

    const mounted = usePromise()

    useMount(async () => {})

    useDeepCompareEffect(() => {}, [session])

    const loginFn = (data) => {
        const { email, password } = data

        mounted(
            login(email, password)
                .then((user) => {
                    setSession(user)
                    setAuthenticated(true)
                    history.push('/')
                })
                .catch((error) => {
                    console.log('error', error)
                })
        )
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
