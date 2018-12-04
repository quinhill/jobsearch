import React, { Component } from 'react';
import './sign-in.css';
import fbConfig from '../../config/fbConfig';
import { signIn } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../../links';

export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: null
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitSignIn = async (event) => {
    event.preventDefault();
    const {
      password,
      email
    } = this.state;
    const {
      history,
      signIn
    } = this.props;

    try {
      const authUser = await fbConfig.doSignInWithEmailAndPassword(email, password);
      const uid = authUser.user.uid;
      const query = fbConfig.collection('users').doc(uid);
      const user = await query.get();
      signIn(user.data())
      history.push('/')
    }
    catch (err) {
      this.setState({ error: err })
    }
    this.resetState();
  }

  resetState = () => {
    this.setState({
      email: '',
      password: '',
      error: null
    })
  }

  render() {

    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password.length < 6 ||
      email === '';

    return (
      <form
        onSubmit={this.submitSignIn}
      >
      <input
          value={email}
          onChange={this.handleChange}
          type="text"
          name='email'
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={this.handleChange}
          type="password"
          name='password'
          placeholder="Password"
        />
        <button
          type='submit'
          disabled={isInvalid}
        >
          Sign In
        </button>
        { error && <p>{error.message}</p> }
        <SignUpLink />
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user))
})

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
