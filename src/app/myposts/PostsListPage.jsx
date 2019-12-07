import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { postService } from 'services/postService'

import { Title } from 'components/Title'

const MyPostItem = ({ post }) => (
    <li class="collection-item row">
        <div className="col s10">
            <p>{post.title}</p>
        </div>
        <div className="col s2 m2">
            <p>
                <Link to={`/my-posts/edit/${post.id}`} class="secondary-content">
                    <i class="material-icons">edit</i>
                </Link>
            </p>
        </div>
    </li>
)

const PostsListPage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.fetchPosts().then(posts => {
            setPosts(posts)
        })
    }, [])

    return (
        <>
            <div className="row">
                <div className="col s6 m6">
                    <Title>All posts</Title>
                </div>
                <div className="col s6 m6">
                    <Link to="/posts/new" class="waves-effect waves-light btn right">
                        New post
                    </Link>
                </div>
            </div>
            <div className="row">
                <ul class="collection">
                    {posts.map(post => (
                        <MyPostItem post={post} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default PostsListPage
