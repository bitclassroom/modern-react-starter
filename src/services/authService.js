export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        if (email === 'r@w.com' && password === 'rw1234') {
            const authdata = window.btoa(email + ':' + password)

            localStorage.setItem('user', JSON.stringify(authdata))

            resolve({ email })
            return
        }

        reject({ error: 'Invalid input' })
    })
}

export const isAuthenticated = () => {
    return !!localStorage.getItem('user')
}
