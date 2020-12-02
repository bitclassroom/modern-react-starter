import React from 'react'

import UsersPageItem from './UsersPageItem'

const UserTable = ({ users = [] }) => {
    return (
        <table className="responsive-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            {users.map((user) => {
                return <UsersPageItem user={user} key={user.id} />
            })}
        </table>
    )
}

// UserTable.propTypes = {
//     users: PropTypes.array.isRequired,
// }

export default UserTable
