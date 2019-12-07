import React from 'react'
import { Link } from 'react-router-dom'
import { Subtitle, Title } from 'components/Title'

export const UserDetails = props => {
    const { user, onDeleteUser } = props
    const { id, email, name, city, street, zipcode } = user

    return (
        <>
            <div className="row">
                <Title>{name}</Title>
            </div>
            <div className="card-panel">
                <div className="row">
                    <div className="col s6">
                        <Subtitle>User details</Subtitle>
                    </div>
                    <div className="col s6">
                        <button
                            onClick={onDeleteUser}
                            className="btn waves-effect waves-light btn-small red right">
                            Delete
                        </button>
                        <Link
                            to={`/users/${id}/edit`}
                            className="btn waves-effect waves-light btn-small right">
                            Edit
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    disabled
                                    id="name"
                                    type="text"
                                    className="validate"
                                    value={name}
                                />
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right">
                                    Name
                                </span>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    disabled
                                    id="email"
                                    type="email"
                                    className="validate"
                                    value={email}
                                />
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right">
                                    Email
                                </span>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    disabled
                                    id="city"
                                    type="text"
                                    className="validate"
                                    value={city}
                                />
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right">
                                    City
                                </span>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    disabled
                                    id="street"
                                    type="text"
                                    className="validate"
                                    value={street}
                                />
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right">
                                    Street
                                </span>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    disabled
                                    id="ZIP"
                                    type="text"
                                    className="validate"
                                    value={zipcode}
                                />
                                <span
                                    className="helper-text"
                                    data-error="wrong"
                                    data-success="right">
                                    ZIP
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserDetails
