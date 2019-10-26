import React, { useState, useContext } from 'react'

import PostsContext from './PostsContext'

const PostItem = props => {
    const { selectPost } = useContext(PostsContext)

    const [isSelected, setSelected] = useState(false)

    const { post } = props
    const { title, desc } = post

    const _toggleSelected = e => {
        setSelected(prevSelected => !prevSelected)
        selectPost(post.id)
    }

    const cardStyle = isSelected ? ' red' : ' blue-grey darken-1'

    return (
        <div className="col s12 m6" onClick={_toggleSelected}>
            <div className={`card${cardStyle}`}>
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PostItem)
