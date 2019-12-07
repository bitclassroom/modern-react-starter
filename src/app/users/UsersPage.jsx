import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { userService } from 'services/userService'

import { Loader } from 'components/loader/Loader'

import { UsersPageItem } from './UsersPageItem'

import './UsersPage.css'
import SearchBar from 'components/SearchBar'
import Pagination from 'components/Pagination'
import { Title } from 'components/Title'

export class UsersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    loadUsers = () => {
        userService.fetchUsers().then(users => {
            console.log(users)

            this.setState({ users })
        })
    }

    componentDidMount() {
        this.loadUsers()
    }

    renderUsers = users => {
        const usersList = users.map(user => {
            return <UsersPageItem user={user} key={user.id} />
        })
        return usersList
    }

    render() {
        const { users } = this.state

        if (users.length === 0) {
            return <Loader text={'Loading users...'} />
        }

        return (
            <>
                <Title>Users</Title>
                <SearchBar />
                <div className="card-panel">
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        {this.renderUsers(users)}
                    </table>
                </div>
                <Pagination />
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
