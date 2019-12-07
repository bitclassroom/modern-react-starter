import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'
import { Loader } from 'components/loader/Loader'

import LoginPage from './login/LoginPage'
import NewPostPage from './myposts/NewPostPage'
import DashboardPage from './dashboard/DashboardPage'
import PostsListPage from './myposts/PostsListPage'
import AboutPage from './about/AboutPage'
import EditPostPage from './myposts/EditPostPage'

const PostsPage = lazy(() => import('./posts/PostsPage'))

const Main = () => (
    <main className="container">
        <Suspense fallback={<Loader text={'Loading page'} />}>
            <Switch>
                <PrivateRoute exact path="/posts/new" component={NewPostPage} />
                <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/my-posts/edit/:postId" component={EditPostPage} />
                <PrivateRoute exact path="/my-posts" component={PostsListPage} />
                <PrivateRoute exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route path="/" component={PostsPage} />
            </Switch>
        </Suspense>
    </main>
)

export default Main
