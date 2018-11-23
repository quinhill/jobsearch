import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCompany } from '../../actions';

import './company-card.css';

class CompanyCard extends Component {
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
    const {
      company,
      culture,
      mission,
      product,
      reference,
      acquaintances,
      id
    } = this.props;

    this.setState({
      company,
      culture,
      mission,
      product,
      reference,
      acquaintances,
      id
    })
  }

  render() {
    
    const {
      company,
      culture,
      mission,
      product,
      reference,
      acquaintances,
      id
    } = this.state;

    return (
      <div className='company-container'>
        <h1>{company}</h1>
        <p>culture: {culture}</p>
        <p>mission: {mission}</p>
        <p>product: {product}</p>
        <p>reference: {reference}</p>
        <p>acquaintances: {acquaintances}</p>
        <button
          id={id}
          onClick={this.editCompany}
        >
          edit
        </button>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateCompany: company => dispatch(updateCompany(company))
})

export default connect(null, mapDispatchToProps)(CompanyCard);