import React from 'react';
import TransactionItem from './TransactionItem';
import styles from './Transactions.module.css';

const TransactionHistory = ({ transactionData }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionData.map(TransactionItem)}</tbody>
    </table>
  );
};

export default TransactionHistory;
