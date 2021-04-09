import React from 'react'
import {Link} from 'react-router-dom';


class SignUp extends React.Component {
    render() {
        return (
            <form className="form">
                <div className="formInput">
                    <h3>Registration</h3>
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

export default SignUp;