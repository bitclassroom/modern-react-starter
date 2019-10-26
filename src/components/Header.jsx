import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="indigo">
        <div className="nav-wrapper container">
            <Link to="/">
                <span className="brand-logo">Users App</span>
            </Link>
            <ul className="right hide-on-med-and-down">
                <li>
                    <Link to="/">Users</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header
