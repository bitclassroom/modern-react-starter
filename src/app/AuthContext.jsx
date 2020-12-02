import React, { useContext } from 'react'

export const AuthContext = React.createContext(undefined)

export const useAuth = () => {
    const ctx = useContext(AuthContext)

    if (ctx === undefined) {
        throw new Error('Not implemented')
    }

    return ctx
}
