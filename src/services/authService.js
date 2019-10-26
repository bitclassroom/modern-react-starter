import * as storage from 'utils/storage'

const login = async (email, password) => {
    if (email === 'r@w.com' && password === 'rw1234') {
        const authdata = window.btoa(email + ':' + password)
        storage.save('user', authdata)
        return Promise.resolve(true)
    }

    return Promise.reject('Error')
}

const isAuthenticated = () => {
    return !!storage.load('user')
}

export { isAuthenticated, login }
