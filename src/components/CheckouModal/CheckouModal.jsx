import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faExclamation,
  faRotateLeft,
  faXmarkSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from 'react-bootstrap';
import { buyAndSellActions } from '../../helpers/transactionsFunctions';
import SuccessScreen from '../SuccessScreen/SuccessScreen';

function CheckouModal() {
  const {
    setShowModal,
    shares,
    setShares,
    shareSelected,
    balance,
    setBalance,
  } = useContext(Context);
  const [confirmationScreen, setConfirmationScreen] = useState(false);
  const [confirmButtonDisable, setConfirmButtonDisable] = useState(true);
  const [buyQty, setBuyQty] = useState(0);
  const [sellQty, setSellQty] = useState(0);
  const [transactionPossible, setTransactionPossible] = useState('nok');
  const [rightText, setRightText] = useState('Valor total da compra');

  const handleBackClick = () => {
    setShowModal(false);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  const handleConfirmClick = () => {
    setConfirmationScreen(true);
    buyAndSellActions(
      shares,
      setShares,
      shareSelected,
      sellQty,
      buyQty,
      setBalance,
      balance,
    );
  };

  useEffect(() => {
    const enableConfirmButton = () => {
      if (
        buyQty > 0 &&
        buyQty <= shareSelected.qtyAvailable &&
        buyQty * shareSelected.price < balance
      ) {
        setConfirmButtonDisable(false);
        setTransactionPossible('ok');
      } else if (sellQty > 0 && sellQty <= shareSelected.qty) {
        setConfirmButtonDisable(false);
        setTransactionPossible('ok');
      } else {
        setConfirmButtonDisable(true);
        setTransactionPossible('nok');
      }
    };
    const showRightText = () => {
      if (sellQty > 0) {
        setRightText('Valor total da venda');
      } else {
        setRightText('Valor total da compra');
      }
    };
    enableConfirmButton();
    showRightText();
  }, [
    balance,
    buyQty,
    sellQty,
    shareSelected.price,
    shareSelected.qty,
    shareSelected.qtyAvailable,
  ]);

  const tableScreen = (
    <div className={styles.CheckouModalComponent}>
      <div className={styles.Header}>
        <div className={styles.Title}>
          <h1>Comprar/Vender Ação</h1>
          <button
            onClick={handleCloseClick}
            id={styles.ExitButton}
            data-testid='closeModalButton'
          >
            <FontAwesomeIcon icon={faXmarkSquare} />
          </button>
        </div>
        <CheckoutTable />
      </div>
      <div className={styles.FormArea}>
        <div className={styles.QtyInputs}>
          <InputGroup className={styles.Inputs}>
            <InputGroup.Text id={styles.BuyButton}>Comprar</InputGroup.Text>
            <Form.Control
              onChange={({ target }) => setBuyQty(Number(target.value))}
              placeholder='Informe a quantidade'
              aria-label='Buy Input'
              type='number'
              disabled={sellQty > 0}
            />
          </InputGroup>
          <InputGroup className={styles.Inputs}>
            <InputGroup.Text id={styles.SellButton}>Vender</InputGroup.Text>
            <Form.Control
              onChange={({ target }) => setSellQty(Number(target.value))}
              placeholder='Informe a quantidade'
              aria-label='Sell Input'
              type='number'
              disabled={shareSelected.qty === 0 || buyQty > 0}
            />
          </InputGroup>
        </div>
        <div
          className={styles.TotalTransaction}
          id={styles[`${transactionPossible}`]}
        >
          <p className={styles.TotalValue}>{rightText}</p>
          {transactionPossible === 'ok' ? (
            <p>
              R${' '}
              {Number((sellQty + buyQty) * shareSelected.price)
                .toFixed(2)
                .replace('.', ',')}
            </p>
          ) : (
            <p>
              <FontAwesomeIcon icon={faExclamation} size='2xl' />
            </p>
          )}
        </div>
      </div>
      <div className={styles.CheckoutButtons}>
        <button onClick={handleBackClick}>
          <FontAwesomeIcon icon={faRotateLeft} />
          Voltar
        </button>
        <button onClick={handleConfirmClick} disabled={confirmButtonDisable}>
          Confirmar
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </div>
  );

  return <>{confirmationScreen ? <SuccessScreen /> : tableScreen}</>;
}

export default CheckouModal;
