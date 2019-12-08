import React from 'react'
import { Title } from 'components/Title'

const DashboardPage = props => {
    // const { title = 'title', desc = 'desc' } = props
    return (
        <div className="row">
            <Title>Dashboard</Title>
            <div className="col s12 m4">
                <div className={`card-panel center`}>
                    <i class="medium material-icons">text_fields</i>
                    <div className="card-content">
                        <h4 className="card-title">100</h4>
                        <p>Total posts</p>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className={`card-panel center`}>
                    <i class="medium material-icons">comment</i>
                    <div className="card-content">
                        <h4 className="card-title">123</h4>
                        <p>Total comments</p>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div className={`card-panel center`}>
                    <i class="medium material-icons">people</i>
                    <div className="card-content">
                        <h4 className="card-title">2</h4>
                        <p>Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
