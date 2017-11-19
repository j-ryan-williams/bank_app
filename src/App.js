import React, {Component} from 'react';
import {Switch, HashRouter, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Accounts from './components/Accounts/Accounts';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route component={Login} path='/' exact />
            <Route component={Accounts} path='/accounts'/>
          </Switch>
        </HashRouter>
    );
  }
}
export default App;
