const PREFIX = 'MODERN_'

export const load = key => {
    const storageKey = PREFIX + key.toUpperCase()
    const data = localStorage.getItem(storageKey)

    return JSON.parse(data)
}

export const save = (key, value) => {
    const storageKey = PREFIX + key.toUpperCase()
    localStorage.setItem(storageKey, JSON.stringify(value))
}
