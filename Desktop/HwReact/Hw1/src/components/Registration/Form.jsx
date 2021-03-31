import React from 'react'
import './Form.css'

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <p className="formHolder">Form</p>
                <input place="Email" type="email"/>
                <input place="Password" type="password"/>
                <input place="Name" type="name"/>
                <button className="button">Sign In</button>
            </div>
        )
    }
}

export default Form