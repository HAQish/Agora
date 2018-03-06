// view for financial informatiom related to project

import React from 'react';

var FinanceView = (props) => {
  let finances = props.project.finances;
  return (
    <div>
      <h1>Transactions: </h1>
      {finances.map(function(item) {
        return (
                <div>
                  <h4>Expected Payment: {item.expectedPayment}</h4>
                </div>
        )
      })}
    </div>
  )
}

export default FinanceView;