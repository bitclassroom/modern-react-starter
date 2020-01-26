import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'

import UserDetailsPage from './user-details/UserDetailsPage'
import CreateUser from './users/CreateUser'
import EditUser from './users/EditUser'
import UsersPage from './users/UsersPage'
import LoginPage from './login/LoginPage'
import AppContext from './AppContext'

const Main = () => {
    const { user } = useContext(AppContext)
    const isAuthenticated = Boolean(user)

    return (
        <main className="container">
            <Switch>
                <PrivateRoute
                    exact
                    path="/users/create"
                    isAuthenticated={isAuthenticated}
                    component={CreateUser}
                    bla
                />
                <PrivateRoute
                    exact
                    isAuthenticated={isAuthenticated}
                    path="/users/:id/edit"
                    component={EditUser}
                />
                <PrivateRoute
                    exact
                    isAuthenticated={isAuthenticated}
                    path="/users/:id"
                    component={UserDetailsPage}
                />
                <PrivateRoute
                    exact
                    isAuthenticated={isAuthenticated}
                    path="/"
                    component={UsersPage}
                />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </main>
    )
}

export default Main
