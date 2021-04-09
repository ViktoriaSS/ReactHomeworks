import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {users} from './Data.jsx'
import './Table.css'

class Table extends Component {
    table() {
        return users.map(({id, name, lasName}) => {
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{lasName}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Surname</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.table()}
                    </tbody>
                </table>
                <Link to='/'>To Sign In</Link>
            </div>
        )
    }
}

export default Table;