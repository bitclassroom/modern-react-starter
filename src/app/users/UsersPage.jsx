import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { UsersPageItem } from './UsersPageItem'
import { Loader } from 'components/loader/Loader'

import './UsersPage.css'
import { BASE_URL } from '../../utils/const'
import UserTable from './UserTable'

export class UsersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    fetchUsers = () => {
        fetch(`${BASE_URL}/users`)
            .then((response) => response.json())
            .then((users) => {
                console.log(users)
                this.setState({
                    users,
                })
            })
    }

    componentDidMount() {
        this.fetchUsers()
    }

    render() {
        const { users } = this.state

        if (users.length === 0) {
            return <Loader text={'Loading users...'} />
        }

        return (
            <>
                <div className="card-panel">
                    <UserTable users={users} />
                </div>
                <div className="fixed-action-btn">
                    <Link to="users/create" className="btn-floating btn-large blue">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </>
        )
    }
}

export default UsersPage
