import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const CompanyDetails = (props) => {
  const { company, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (company) {
    return (
      <div>
        <div>
          <div>
            <span>{company.name}</span>
            <p></p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <p>loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const companies = state.firestore.data.companies;
  const company = companies ? companies[id] : null
  return {
    company: company,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'companies' }
  ])
)(CompanyDetails)
