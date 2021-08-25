// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './TransactionHistor.module.css';


const TransactionHistory = ({ transactions }) => (
    <>
        <table className={styles.transactionHistory}>
            <thead>
                <tr className={styles.title}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    </>
);

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired
};


export default TransactionHistory;