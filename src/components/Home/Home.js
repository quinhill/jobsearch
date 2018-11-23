import React, { Component } from 'react';
import ResearchForm from '../../containers/ResearchForm/ResearchForm';
import SignOutButton from '../../containers/SignOut/SignOut';
import { firebase, db } from '../../firebase';
import { signIn, getCompanies } from '../../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyContainer from '../../containers/CompanyContainer/CompanyContainer';

import './home.css';

class Home extends Component {

  componentDidMount() {
    const {
      user,
      signIn,
      history
    } = this.props;
    if (!user.uid) {
      firebase.auth.onAuthStateChanged(async authUser => {
        if (authUser) {
          const { uid } = authUser;
          const userQuery = await db.collection('users').doc(uid);
          const user = await userQuery.get();
          signIn(user.data())
          const researchQuery = await db.collection('users').doc(uid).collection('research')
          const companies = await researchQuery.get();
          companies.docs.forEach(doc => {
            
          })
        } else {
          history.push('/signup');
        }
      });
    }
  }
  
  render() {
    return (
      <div className='home-container'>
        <SignOutButton />
        <ResearchForm />
        <CompanyContainer />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user)),
  getCompanies: companies => dispatch(getCompanies(companies))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));