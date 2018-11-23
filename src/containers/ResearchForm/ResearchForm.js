import React, { Component } from 'react';
import { connect } from 'react-redux';

import './research-form.css';
import { storeResearch } from '../../actions';
import { db } from '../../firebase';

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
      id: null
    }
  }

  componentDidMount() {
    const id = this.props.companies.length;
    this.setState({ id });
  }

  changeInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitForm = async (event) => {
    event.preventDefault();
    const {
      company,
      culture,
      mission,
      product,
      reference,
      acquaintances,
      id
    } = this.state;
    const { uid, submitResearch } = this.props;
    await db.collection('users').doc(uid).collection('research').doc(company).set({
      culture,
      mission,
      product,
      reference,
      acquaintances,
      id
    });
    submitResearch(this.state);
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
            id='company'
          />
          <label htmlFor='culture'>culture</label>
          <input 
            name='culture'
            value={culture}
            onChange={this.changeInput}
            id='culture'
          />
          <label htmlFor='mission'>mission</label>
          <input 
            name='mission'
            value={mission}
            onChange={this.changeInput}
            id='mission'
          />
          <label htmlFor='product'>product</label>
          <input 
            name='product'
            value={product}
            onChange={this.changeInput}
            id='product'
          />
          <label htmlFor='reference'>
            reference possibility to your past work
          </label>
          <input 
            name='reference'
            value={reference}
            onChange={this.changeInput}
            id='reference'
          />
          <label htmlFor='acquaintances'>
            People you know at the company
          </label>
          <input 
            name='acquaintances'
            value={acquaintances}
            onChange={this.changeInput}
            id='acquaintances'
          />
          <button
            type='submit'
          >
            submit
          </button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  uid: state.user.uid,
  companies: state.companies
});

const mapDispatchToProps = dispatch => ({
  submitResearch: research => dispatch(storeResearch(research))
})

export default connect(mapStateToProps, mapDispatchToProps) (ResearchForm);