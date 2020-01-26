import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import AppContext from './AppContext'

class AppStore extends Component {
    state = {
        user: null
    }

    setSession = user => {
        // do extra validation

        console.log('setSession')
        this.setState({ user }, () => {
            this.props.history.push('/')
        })
    }

    logout = () => {
        // clear local storage

        // clear session user
        this.setState({ user: null })
    }

    render() {
        const { user } = this.state
        const { logout, setSession } = this

        const authProviderValue = {
            user,
            logout,
            setSession
        }

        return (
            <AppContext.Provider value={authProviderValue}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default withRouter(AppStore)
