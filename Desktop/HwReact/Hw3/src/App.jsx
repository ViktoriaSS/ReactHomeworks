import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn/SignIn.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Table from './components/Table/Table.jsx';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Table/>
                    <Switch>
                        <Route exact path='/' component={SignIn}/>
                        <Route path='/SignUp' component={SignUp}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

