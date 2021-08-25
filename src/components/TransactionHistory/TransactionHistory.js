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
                {transactions.map(({id,type,amount,currency}) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
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