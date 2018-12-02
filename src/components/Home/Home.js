import React, { Component } from 'react';
import ResearchForm from '../../containers/ResearchForm/ResearchForm';
import SignOutButton from '../../containers/SignOut/SignOut';
import { firebase } from '../../firebase';
import signInThunk from '../../thunks/signInThunk';
import getCompaniesThunk from '../../thunks/getCompaniesThunk';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyContainer from '../../containers/CompanyContainer/CompanyContainer';

import './home.css';

class Home extends Component {

  componentDidMount() {
    const {
      user,
      signIn,
      getCompanies,
      history
    } = this.props;
    if (!user.uid) {
      firebase.auth.onAuthStateChanged(async authUser => {
        if (authUser) {
          const { uid } = authUser;
          await signIn(uid)
          await getCompanies(uid);
        } else {
          history.push('/signup');
        }
      });
    }
  }
  
  render() {
    return (
      <div className='home-container'>
        <header>
          <div></div>
          <h1>Apply</h1>
          <SignOutButton />
        </header>
        <div className='display-container'>
          <ResearchForm />
          <CompanyContainer />
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  signIn: uid => dispatch(signInThunk(uid)),
  getCompanies: uid => dispatch(getCompaniesThunk(uid))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));