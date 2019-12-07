import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { isAuthenticated, logout } from 'services/authService'

const Footer = props => {
    let history = useHistory()
    return (
        <footer className="page-footer indigo">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} BIT
                    {isAuthenticated() ? (
                        <div
                            className="grey-text text-lighten-4 right"
                            onClick={() => {
                                logout(() => {
                                    history.push('/')
                                })
                            }}>
                            Logout
                        </div>
                    ) : (
                        <Link className="grey-text text-lighten-4 right" to="/login">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
