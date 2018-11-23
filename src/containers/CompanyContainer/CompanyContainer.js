import React from 'react';
import { connect } from 'react-redux';
import CompanyCard from '../CompanyCard/CompanyCard';

import './company-container.css';

const CompanyContainer = props => {
  const companyList = props.companies.map(company => {
    return (
      <CompanyCard {...company} />
    )
  })
  return (
    <div className='companies-container'>
      {companyList}
    </div>
  );
}

const mapStateToProps = state => ({
  companies: state.companies
});



export default connect(mapStateToProps)(CompanyContainer);