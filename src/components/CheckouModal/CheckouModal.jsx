import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotateLeft, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from 'react-bootstrap';
import { buyAndSellActions } from '../../helpers/transactionsFunctions'
import SuccessScreen from '../SuccessScreen/SuccessScreen';

function CheckouModal() {
    const { setShowModal, shares, setShares, shareSelected } = useContext(Context)
    const [confirmationScreen, setConfirmationScreen] = useState(false);
    const [confirmButtonDisable, setConfirmButtonDisable] = useState(true);
    const [buyQty, setBuyQty] = useState(0);
    const [sellQty, setSellQty] = useState(0);

    const handleBackClick = () => {
        setShowModal(false)
    }

    const handleCloseClick = () => {
        setShowModal(false)
    }

    const handleConfirmClick = () => {
        setConfirmationScreen(true)
        buyAndSellActions(shares, setShares, shareSelected, sellQty, buyQty)
    }

    useEffect(() => {
        const enableConfirmButton = () => {
            if (sellQty || buyQty > 0) {
                console.log('maior q 0');
                setConfirmButtonDisable(false)
            }
            if (buyQty <= shareSelected.qtyAvailable && buyQty > 0) {
                console.log('menos q o maximo');
                setConfirmButtonDisable(false);
            } else if (sellQty <= shareSelected.qty && sellQty > 0) {
                console.log('mais q o maximo');
                setConfirmButtonDisable(false);
            }
            else {
                setConfirmButtonDisable(true)
            }
        };
        enableConfirmButton();
    }, [buyQty, sellQty, shareSelected.qty, shareSelected.qtyAvailable]);

    const tableScreen =
        (<div className={styles.CheckouModalComponent}>
            <div className={styles.Header}>
                <div className={styles.Title}>
                    <h1>Comprar/Vender Ação</h1>
                    <button onClick={handleCloseClick} id={styles.ExitButton}>
                        <FontAwesomeIcon icon={faXmarkSquare} />
                    </button>
                </div>
                <CheckoutTable />
            </div>
            <div className={styles.QtyInputs}>
                <InputGroup className={styles.Inputs}>
                    <InputGroup.Text id={styles.BuyButton}>Comprar</InputGroup.Text>
                    <Form.Control
                        onChange={({ target }) => setBuyQty(Number(target.value))}
                        placeholder="Informe a quantidade"
                        aria-label="Buy Input"
                        type='number'
                        disabled={sellQty > 0}
                    />
                </InputGroup>
                <InputGroup className={styles.Inputs}>
                    <InputGroup.Text id={styles.SellButton}>Vender</InputGroup.Text>
                    <Form.Control
                        onChange={({ target }) => setSellQty(Number(target.value))}
                        placeholder="Informe a quantidade"
                        aria-label="Sell Input"
                        type='number'
                        disabled={shareSelected.qty === 0 || buyQty > 0}
                    />
                </InputGroup>
            </div>
            <div className={styles.CheckoutButtons}>
                <button onClick={handleBackClick}><FontAwesomeIcon icon={faRotateLeft} />Voltar</button>
                <button onClick={handleConfirmClick} disabled={confirmButtonDisable}>Confirmar<FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </div>)

    return (
        <>{confirmationScreen ? <SuccessScreen /> : tableScreen}</>
    );
}

export default CheckouModal;