import React, { useState } from 'react'

import PostsList from './PostsList'
import PostsContext from './PostsContext'
import { Title } from 'components/Title'
import SearchBar from 'components/SearchBar'

const PostsPage = () => {
    const [selectedPosts, setPosts] = useState([])

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
                <Title>All posts</Title>
                <div className="row">
                    <SearchBar />
                    <PostsList />
                </div>
            </div>
        </PostsContext.Provider>
    )
}

export default PostsPage
