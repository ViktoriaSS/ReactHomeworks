import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 1
        }
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.onChange} type="range" min="1" max="100" value={this.state.value}/>
                <input onChange={this.onChange} type="text" value={this.state.value}/>
            </div>
        )
    }
}

export default Input;