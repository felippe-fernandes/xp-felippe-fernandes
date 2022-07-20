import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotateLeft, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from 'react-bootstrap';
import SuccessScreen from '../SuccessScreen/SuccessScreen';

function CheckouModal() {
    const { setShowModal } = useContext(Context)
    const [confirmationScreen, setConfirmationScreen] = useState(false);
    const [confirmButtonDisable, setConfirmButtonDisable] = useState(false);
    const [buyValue, setBuyValue] = useState(0);
    const [sellValue, setSellValue] = useState(0);

    const handleBackClick = () => {
        setShowModal(false)
    }

    const handleConfirmClick = () => {
        setConfirmationScreen(true)
    }

    useEffect(() => {
        const enableConfirmButton = () => {
            if (sellValue || buyValue > 0) {
                setConfirmButtonDisable(false)
            } else {
                setConfirmButtonDisable(true)
            }
        };
        enableConfirmButton();
    }, [buyValue, sellValue]);

    const tableScreen =
        (<div className={styles.CheckouModalComponent}>
            <div className={styles.Header}>
                <div className={styles.Title}>
                    <h1>Comprar/Vender Ação</h1>
                    <button id={styles.ExitButton}>
                        <FontAwesomeIcon icon={faXmarkSquare} />
                    </button>
                </div>
                <CheckoutTable />
            </div>
            <div className={styles.QtyInputs}>
                <InputGroup className={styles.Inputs}>
                    <InputGroup.Text id={styles.BuyButton}>Comprar</InputGroup.Text>
                    <Form.Control
                        onChange={({ target }) => setBuyValue(target.value)}
                        placeholder="Informe o valor"
                        aria-label="Buy Input"
                        type='number'
                    />
                </InputGroup>
                <InputGroup className={styles.Inputs}>
                    <InputGroup.Text id={styles.SellButton}>Vender</InputGroup.Text>
                    <Form.Control
                        onChange={({ target }) => setSellValue(target.value)}
                        placeholder="Informe o valor"
                        aria-label="Sell Input"
                        type='number'
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