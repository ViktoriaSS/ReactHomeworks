import React from 'react'
import './App.css';
import Test from './Test.jsx';
import Input from './components/RangeInput/Range.jsx'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div className="App">
                <Input/>
                <Test/>
            </div>
        );
    }
}

export default App;