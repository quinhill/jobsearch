import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signOut } from '../../actions';
import { auth } from '../../firebase';

import './sign-out.css';

export class SignOutButton extends Component {
  
  handleSignOut = () => {
    auth.doSignOut();
    this.props.signOut();
    this.props.history.push('/signin');
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.handleSignOut}
        className='sign-out-button'
      >
      </button>
    );
  }
}

export const mapDisptatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
})


export default withRouter(connect(null, mapDisptatchToProps)(SignOutButton));