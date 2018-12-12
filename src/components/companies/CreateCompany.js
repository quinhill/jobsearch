import React, { Component } from 'react'
import { createCompany } from '../../store/actions/companyActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateCompany extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      culture: '',
      mission: '',
      reference: '',
      acquaintance: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  clearInputs = () => {
    this.setState({
      name: '',
      culture: '',
      mission: '',
      reference: '',
      acquaintance: ''
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createCompany(this.state)
    this.clearInputs();
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='name'>Company Name</label>
            <input type='text' id='name' onChange={this.handleChange}></input>
          </div>
          <div className='textarea-field'>
            <label htmlFor='culture'>Culture</label>
            <textarea type='text' id='culture' onChange={this.handleChange}></textarea>
          </div>
          <div className='textarea-field'>
            <label htmlFor='mission'>Mission</label>
            <textarea type='text' id='mission' onChange={this.handleChange}></textarea>
          </div>
          <div className='textarea-field'>
            <label htmlFor='reference'>Reference</label>
            <textarea type='text' id='reference' onChange={this.handleChange}></textarea>
          </div>
          <div className='textarea-field'>
            <label htmlFor='acquaintance'>Acquaintance</label>
            <textarea type='text' id='acquaintance' onChange={this.handleChange}></textarea>
          </div>
          <div className='textarea-field'>
            <button>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCompany: (company) => dispatch(createCompany(company))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompany);
