import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { isAuthenticated } from 'services/authService'

const NavMenu = () => {
    return isAuthenticated() ? (
        <>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/my-posts">My posts</Link>
            </li>
        </>
    ) : (
        <>
            <li>
                <Link to="/">Posts</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </>
    )
}

const Header = props => {
    return (
        <nav className="indigo">
            <div className="nav-wrapper container">
                <Link to="/">
                    <span className="brand-logo">CRUD </span>
                </Link>
                <ul className="right">
                    <NavMenu />
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Header)
