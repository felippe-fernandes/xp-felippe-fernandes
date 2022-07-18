import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/Header/Header'
import StockTable from '../../components/StockTable/StockTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

function Wallet() {

  function handleClick() {
    console.log('ok');
  }

  return (
    <div className={styles.WalletPage}>
        <Header />
        <StockTable/>
        <button className={styles.TransferButton} onClick={handleClick}>
          <p>Deposito/Retirada</p>
          <FontAwesomeIcon icon={faMoneyBillTransfer} />
        </button>
    </div>
  );
}

export default Wallet;