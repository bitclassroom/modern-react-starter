import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthenticated, ...restProps }) => (
    <Route
        {...restProps}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to={'/login'} />
        }
    />
)

export default PrivateRoute
