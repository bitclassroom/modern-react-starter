import React from 'react'
import PostForm from './PostForm'

const EditPostPage = () => {
    return (
        <div>
            <h3>Update post</h3>
            <div className="card-panel">
                <PostForm isEdit={true} />
            </div>
        </div>
    )
}

export default EditPostPage
