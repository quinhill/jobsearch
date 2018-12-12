import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

import './signed-in-links.css';

const SignedInLinks = (props) => {
  return (
    <ul>
      <li>
        <NavLink to='/createcompany'>New Application</NavLink>
      </li>
      <li>
        <a 
          onClick={props.signOut}
        >
        Log Out
        </a>
      </li>
      <li>
        <NavLink to='/' className='button'>
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);