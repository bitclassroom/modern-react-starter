import React, { Component } from 'react'

import { BASE_URL } from 'utils/const'
import * as ui from 'utils/ui'

import { userService } from 'services/userService'

import { Loader } from 'components/loader/Loader'

import { UserDetails } from './UserDetails'

class UserDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            error: ''
        }
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser = async () => {
        try {
            const userId = this.props.match.params.id

            const user = await userService.fetchSingleUser(userId)
            this.setState({
                user,
                isDeleting: false
            })
        } catch (error) {
            ui.showAlert()
        }
    }

    deleteUser = () => {
        const { id: userId } = this.props.match.params

        const deleteUrl = `${BASE_URL}/users/${userId}`

        this.setState({ isDeleting: true }, () => {
            fetch(deleteUrl, {
                method: 'DELETE'
            }).then(_ => {
                this.props.history.push('/')
            })
        })
    }

    render() {
        const { user, isDeleting } = this.state

        if (isDeleting) {
            return <Loader text={`Deleting user ${user.name}`} />
        }

        if (!user) {
            return <Loader text={'Loading user details...'} />
        }

        return <UserDetails user={user} onDeleteUser={this.deleteUser} />
    }
}

export default UserDetailsPage
