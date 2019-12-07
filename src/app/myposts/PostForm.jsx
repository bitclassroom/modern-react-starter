import React from 'react'
import { useParams } from 'react-router-dom'

import { postService } from 'services/postService'

const PostForm = ({ isEdit }) => {
    const { postId } = useParams()
    const [post, setPost] = React.useState({})

    React.useEffect(() => {
        if (isEdit) {
            postService.fetchPost(postId).then(post => {
                setPost(post)
            })
        }
    }, [])

    return (
        <div class="row">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s6">
                        <input
                            placeholder="Title"
                            id="first_name"
                            type="text"
                            class="validate"
                            value={post.title}
                        />
                        <label htmlFor="first_name">Title</label>
                    </div>
                    <div class="input-field col s6">
                        <input
                            id="last_name"
                            type="text"
                            class="validate"
                            value={post.title}
                        />
                        <label htmlFor="last_name">Subtitle</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input
                            id="last_name"
                            type="text"
                            class="validate"
                            value={post.imageUrl}
                        />
                        <label htmlFor="last_name">Image URL</label>
                    </div>
                    <div class="input-field col s6">
                        <div class="switch">
                            <label>
                                Private
                                <input type="checkbox" />
                                <span class="lever"></span>
                                Public
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea
                            id="textarea1"
                            class="materialize-textarea"
                            value={post.desc}></textarea>
                        <label for="textarea1">Textarea</label>
                    </div>
                </div>
            </form>
            <div class="row right">
                <button class="btn waves-effect waves-light" type="submit" name="action">
                    Save
                    <i class="material-icons right">save</i>
                </button>
                {isEdit && (
                    <button
                        class="btn waves-effect waves-light red"
                        type="submit"
                        name="action">
                        Delete
                        <i class="material-icons right">delete</i>
                    </button>
                )}
            </div>
        </div>
    )
}

export default PostForm
