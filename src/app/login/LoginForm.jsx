import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email required'),
    password: yup.string().min(5).max(10).required(),
})

function LoginForm({ onSubmit }) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    return (
        <form className="col s6 offset-s3" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                        id="email"
                        name="email"
                        ref={register}
                        placeholder="Email"
                        className="validate"
                    />
                    <span className="helper-text" data-error="wrong" data-success="right">
                        Enter your login email
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <i className="material-icons prefix">lock</i>
                    <input
                        id="password"
                        placeholder="Password"
                        type="password"
                        className="validate"
                        name="password"
                        ref={register}
                    />
                    <span className="helper-text" data-error="wrong" data-success="right">
                        Password must be strong
                    </span>
                </div>
            </div>
            <div className="row center">
                <div className="helper-text red-text">
                    {errors.email ? <p>{errors.email.message}</p> : ''}
                    {errors.password ? <p>{errors.password.message}</p> : ''}
                </div>
            </div>
            <div className="right">
                <button type="submit" className="waves-effect waves-light btn indigo">
                    <i className="material-icons left">cloud</i>Login
                </button>
            </div>
        </form>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default LoginForm
