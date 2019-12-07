import React, { useState, useContext } from 'react'
import truncate from 'lodash/truncate'

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

    const cardStyle = isSelected ? ' red' : ' indigo darken-1'

    return (
        <div className="col s12 m4" onClick={_toggleSelected}>
            <div className={`card${cardStyle}`}>
                <div class="card-image">
                    <img src={`https://picsum.photos/id/${post.id}/600/800`} />
                </div>
                <div className="card-content white-text">
                    <span className="card-title">{truncate(desc, { length: 35 })}</span>
                    <p>{truncate(desc, { length: 100 })}</p>
                </div>
                <div class="card-action">
                    <p className="right-align white-text">
                        Author: Author Name | Comments: 90
                    </p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PostItem)
