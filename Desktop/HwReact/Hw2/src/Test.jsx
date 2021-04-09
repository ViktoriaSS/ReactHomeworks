import React from 'react';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    handleClick = () => {
        if (this.state.value < 15) {
            this.setState({
                value: this.state.value + 1
            })
        }
    }


    render() {
        return (
            <div>
                <input value={this.state.value}/>
                <button onClick={this.handleClick}>Add +1</button>
            </div>
        );
    }
}

export default Test;