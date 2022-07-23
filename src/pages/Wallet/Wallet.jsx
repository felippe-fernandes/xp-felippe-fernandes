import React, { useContext } from 'react';
import styles from './styles.module.css';
import Header from '../../components/Header/Header';
import StockTable from '../../components/StockTable/StockTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import Context from '../../context/Context';
import CheckouModal from '../../components/CheckouModal/CheckouModal';
import { useNavigate } from 'react-router-dom';

function Wallet() {
  const { showModal, setShowModal } = useContext(Context);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/payment');
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.WalletPage} id='main'>
      <Header />
      <StockTable />
      <button className={styles.TransferButton} onClick={handleClick}>
        <p>Depósito/Retirada</p>
        <FontAwesomeIcon icon={faMoneyBillTransfer} />
      </button>
      <ReactModal
        isOpen={showModal}
        contentLabel='Checkout Modal'
        ariaHideApp={false}
        onRequestClose={handleModalClose}
        className={styles.Modal}
      >
        <CheckouModal className={styles.teste} closeTimeoutMS={2000} />
      </ReactModal>
    </div>
  );
}

export default Wallet;
