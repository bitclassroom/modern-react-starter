import { API } from 'utils/api'

import Post from '../models/Post'

class PostService {
    async fetchPosts() {
        const apiPosts = await API.get('/posts')
        const posts = apiPosts.map(post => {
            return new Post(post)
        })
        return posts
    }
}

export const postService = new PostService()
