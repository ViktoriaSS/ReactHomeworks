import React from 'react'
import {Link} from 'react-router-dom';
import './signinstyle.css'

class SignIn extends React.Component {
    render() {
        return (
            <form className="form">
                <div className="formInputs">
                    <h1>Log In</h1>
                    <input type="text" placeholder='Name'></input>
                    <input type="password" placeholder='Password'></input>
                    <input type="email" placeholder='Email'></input>
                    <Link className="button" to="/">Sign In</Link>
                    <Link className="button" to="/SignUp">Sign Up</Link>
                </div>
            </form>
        )
    }
}

export default SignIn;