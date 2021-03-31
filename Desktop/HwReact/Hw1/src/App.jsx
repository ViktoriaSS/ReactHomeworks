import React, {Component} from 'react';
import Ball from './components/Ball/Ball';
import Form from './components/Registration/Form';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Form/>
                <Ball/>
            </div>
        )
    }
}

export default App;
