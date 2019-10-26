import { API } from 'utils/api'

import User from 'models/User'

class UserService {
    fetchUsers() {
        return API.get('/users').then(apiUsers => {
            console.log(apiUsers)
            const users = apiUsers.map(user => {
                return new User(user)
            })

            return users
        })
    }

    async fetchSingleUser(userId) {
        const userUrl = `/users/${userId}`
        const user = await API.get(userUrl)
        return new User(user)
    }
}

export const userService = new UserService()
