import React, { useState } from 'react'

import PostsList from './PostsList'
import PostsContext from './PostsContext'

const PostsPage = () => {
    const [selectedPosts, setPosts] = useState([])

    const _submitPosts = () => {
        // postService.submitPosts(selectedPosts)
    }

    const _onPostSelect = postId => {
        const hasPost = selectedPosts.includes(postId)

        if (hasPost) {
            setPosts(prevPostIds => prevPostIds.filter(id => id !== postId))
        } else {
            setPosts(prevPostIds => [...prevPostIds, postId])
        }
    }

    return (
        <PostsContext.Provider
            value={{
                selectPost: _onPostSelect
            }}>
            <div className="row">
                <div className="row">
                    <h1>Posts ({selectedPosts.length})</h1>
                    <input type="button" value="Send posts" onClick={_submitPosts} />
                </div>
                <PostsList />
            </div>
        </PostsContext.Provider>
    )
}

export default PostsPage
