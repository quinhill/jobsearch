import React from 'react';
import { connect } from 'react-redux';
import CompanyCard from '../CompanyCard/CompanyCard';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import './company-container.css';

const CompanyContainer = props => {
  let companyList;
  if (props.companies) {
    companyList = props.companies.map((company, index) => {
      return (
        <CompanyCard key={index} {...company} />
      )
    })
  }
  return (
    <div className='companies-container'>
      {companyList}
    </div>
  );
}

const mapStateToProps = state => ({
  companies: state.firestore.ordered.research
});



export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'research' }
  ])
)(CompanyContainer);