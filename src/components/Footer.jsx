import React, { useContext } from 'react'

import AppContext from 'app/AppContext'

const Footer = () => {
    const { user, logout } = useContext(AppContext)

    const isAuthenticated = Boolean(user)

    return (
        <footer className="page-footer indigo">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} ReactWeek Workshop
                    {isAuthenticated && (
                        <button className="btn" onClick={logout}>
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </footer>
    )
}

export { Footer }
