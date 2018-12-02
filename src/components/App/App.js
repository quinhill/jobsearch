import React, { Component } from 'react';
import Home from '../Home/Home';
import SignUp from '../../containers/SignUp/SignUp';
import SignIn from '../../containers/SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/signup' component={SignUp} />
         <Route path='/signin' component={SignIn} />
       </Switch>
      </div>
    );
  }
}

export default App;
