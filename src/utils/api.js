import { BASE_URL } from './const'
import { handleResponse } from './helpers'

class ApiService {
    get(path, params = {}) {
        // {name: "bla", radius: 50}
        // ?name=bla&radius=50

        params = Object.entries(params)
        const hasParams = params.length > 0

        const reqParams = params.map(param => param.join('=')).join('&')
        const queryParams = hasParams ? `?${reqParams}` : ''

        const reqUrl = BASE_URL + path + queryParams
        return fetch(reqUrl).then(handleResponse)
    }

    async post(path, payload) {}

    async delete(path) {}
}

export const API = new ApiService()
