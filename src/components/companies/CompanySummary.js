import React from 'react';

const CompanySummary = ({company}) => {
  return (
    <div className='card'>
        <div className='card-content'>
          <span className='card-title'>{company.name} - {company.id}</span>
          <p>posted by Quinlan Hill</p>
          <p>3rd September, 2am</p>
        </div>
      </div>
  )
}

export default CompanySummary;