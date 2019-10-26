import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'
import { Loader } from 'components/loader/Loader'

import LoginPage from './login/LoginPage'
import CreateUser from './users/CreateUser'
import EditUser from './users/EditUser'
import UsersPage from './users/UsersPage'
import UserDetailsPage from './user-details/UserDetailsPage'

const PostsPage = lazy(() => import('./posts/PostsPage'))

const Main = () => (
    <main className="container">
        <Suspense fallback={<Loader text={'Loading page'} />}>
            <Switch>
                <PrivateRoute exact path="/users/create" component={CreateUser} />
                <PrivateRoute exact path="/users/:id/edit" component={EditUser} />
                <PrivateRoute exact path="/users/:id" component={UserDetailsPage} />
                <PrivateRoute exact path="/posts" component={PostsPage} />
                <PrivateRoute exact path="/" component={UsersPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </Suspense>
    </main>
)

export default Main
