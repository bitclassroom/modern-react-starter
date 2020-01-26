export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        if (email === 'r@w.com' && password === 'rw1234') {
            const authdata = window.btoa(email + ':' + password)
            // localStorage.setItem('user', JSON.stringify(authdata))
            // console.log(this.context)
            const user = { email, token: authdata }
            resolve(user)
            return
        }

        reject('Wrong username or password')
    })
}
