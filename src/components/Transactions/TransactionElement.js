import React from 'react';
import PropTypes from 'prop-types';

const TransactionElement = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionElement.defaultProps = {
  type: 'unknown',
  amount: '0.0',
  currency: 'NONE',
};

TransactionElement.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionElement;
