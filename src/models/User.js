export default class User {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.city = data.address.city
        this.zipcode = data.address.zipcode
        this.street = data.address.street
    }

    get hiddenEmail() {
        const [username, domain] = this.email.split('@')
        return `${username.slice(0, 2)}...@${domain}`
    }
}
