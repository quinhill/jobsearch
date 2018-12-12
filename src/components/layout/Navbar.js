import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux';

import './navbar.css';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid 
    ? <SignedInLinks profile={profile} /> 
    : <SignedOutLinks />;
  return (
    <nav>
      <div className='container'>
        <Link to='/'>Home</Link>
        { links }
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);