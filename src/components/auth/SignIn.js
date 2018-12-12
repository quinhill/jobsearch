import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signIn(this.state)
  }

  render() {

    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to='/dashboard' />

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange}></input>
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange}></input>
          </div>
          <div className='input-field'>
            <button>
              Log In
            </button>
            <div>
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
