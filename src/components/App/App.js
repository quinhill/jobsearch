import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Dashboard from '../dashboard/Dashboard';
import CompanyDetails from '../companies/CompanyDetails';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import CreateCompany from '../companies/CreateCompany';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/company/:id' component={CompanyDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/createcompany' component={CreateCompany} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
