import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signOut } from '../../actions';
import fbConfig from '../../config/fbConfig';
import './sign-out.css';

export class SignOutButton extends Component {
  
  handleSignOut = () => {
    fbConfig.doSignOut();
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