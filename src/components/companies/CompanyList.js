import React from 'react';
import CompanySummary from './CompanySummary'
import { Link } from 'react-router-dom';

const CompanyList = ({companies}) => {

  return (
    <div className='company-list'>
      { companies && companies.map(company => {
        return (
          <Link to={'/company/' + company.id}>
            <CompanySummary 
              company={company} 
              key={company.id}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default CompanyList;