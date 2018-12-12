import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCompany } from '../../store/actions/companyActions';

import './research-form.css';

class ResearchForm extends Component {
  constructor() {
    super()
    this.state = {
      company: '',
      culture: '',
      mission: '',
      product: '',
      reference: '',
      acquaintances: '',
    }
  }

  changeInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitForm = (event) => {
    event.preventDefault();
    const { createCompany } = this.props;
    createCompany({ ...this.state });
  }

  render() {

    const {
      company,
      culture,
      mission,
      product,
      reference,
      acquaintances
    } = this.state;

    return (
      <div className='research-container'>
        <form 
          className='research-form'
          onSubmit={this.submitForm}
        >
          <label htmlFor='company'>name of company</label>
          <input
            name='company'
            value={company}
            onChange={this.changeInput}
            className='research-input'
            id='company'
          />
          <label htmlFor='culture'>culture</label>
          <input 
            name='culture'
            value={culture}
            onChange={this.changeInput}
            className='research-input'
            id='culture'
          />
          <label htmlFor='mission'>mission</label>
          <input 
            name='mission'
            value={mission}
            onChange={this.changeInput}
            className='research-input'
            id='mission'
          />
          <label htmlFor='product'>product</label>
          <input 
            name='product'
            value={product}
            onChange={this.changeInput}
            className='research-input'
            id='product'
          />
          <label htmlFor='reference'>
            reference possibility to your past work
          </label>
          <input 
            name='reference'
            value={reference}
            onChange={this.changeInput}
            className='research-input'
            id='reference'
          />
          <label htmlFor='acquaintances'>
            People you know at the company
          </label>
          <input 
            name='acquaintances'
            value={acquaintances}
            onChange={this.changeInput}
            className='research-input'
            id='acquaintances'
          />
          <button
            type='submit'
            className='submit-button'
          >
            submit
          </button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  companies: state.companies
});

const mapDispatchToProps = dispatch => ({
  createCompany: company => dispatch(createCompany(company))
})

export default connect(mapStateToProps, mapDispatchToProps) (ResearchForm);