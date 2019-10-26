import React from 'react'
import { Link } from 'react-router-dom'

export const UsersPageItem = props => {
    const { user } = props
    const { id, name, hiddenEmail, city } = user
    return (
        <tbody>
            <tr>
                <td>{id}</td>
                <td>
                    <Link to={`/users/${id}`}>{name}</Link>
                </td>
                <td>{hiddenEmail}</td>
                <td>{city}</td>
            </tr>
        </tbody>
    )
}

export default UsersPageItem
