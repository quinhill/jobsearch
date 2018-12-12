import React, { Component } from 'react';
import Notifications from './Notifications';
import CompanyList from '../companies/CompanyList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

import './dashboard.css';

class Dashboard extends Component {
  render() {

    const { companies, auth } = this.props;

    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className='dashboard-container'>
        <div>
          <div className='company-list-container'>
            <CompanyList companies={companies} />
          </div>
          <div className='notifications'>
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.firestore.ordered.companies,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'companies' }
  ])
)(Dashboard);