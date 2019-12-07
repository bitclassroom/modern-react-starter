import { API } from 'utils/api'

import Post from '../models/Post'

class PostService {
    async fetchPosts() {
        const apiPosts = await API.get('/posts?_limit=9')
        const posts = apiPosts.map(post => new Post(post))
        return posts
    }

    async fetchPost(postId) {
        const postData = await API.get('/posts/' + postId)
        const post = new Post(postData)
        return post
    }
}

export const postService = new PostService()
