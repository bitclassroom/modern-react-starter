import React from 'react'
import PostForm from './PostForm'

const NewPostPage = () => {
    return (
        <>
            <h3>Create new post</h3>
            <div className="card-panel">
                <PostForm />
            </div>
        </>
    )
}

export default NewPostPage
