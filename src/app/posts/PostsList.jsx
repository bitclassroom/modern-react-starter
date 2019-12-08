import React, { useState, useEffect } from 'react'

import { postService } from 'services/postService'

import PostItem from './PostItem'

const PostsList = props => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.fetchPosts().then(posts => {
            setPosts(posts)
        })
    }, [])

    return (
        <>
            {posts.map(post => (
                <PostItem post={post} key={post.id} />
            ))}
        </>
    )
}

export default React.memo(PostsList)
