import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/Header/Header'
import TransactionForms from '../../components/TransactionsForms/TransactionForms';

function Payment() {


  return (
    <div className={styles.PaymentPage}>
        <Header />
        <TransactionForms />
    </div>
  );
}

export default Payment;