import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import SuccessScreen from '../SuccessScreen/SuccessScreen';


function TransactionForms() {
    let navigate = useNavigate();
    const [activeDepositButton, setActiveDepositButton] = useState('selected')
    const [activeWithdrawalButton, setActiveWithdrawalButton] = useState('normal')
    const [confirmationScreen, setConfirmationScreen] = useState(false);
    const [confirmButtonDisable, setConfirmButtonDisable] = useState(false);
    const [inputValue, setInputValue] = useState(false);
    const [optionChoose, setOption] = useState('depósito');

    useEffect(() => {
        const enableConfirmButton = () => {
            if (inputValue <= 0) {
                setConfirmButtonDisable(true)
            } else {
                setConfirmButtonDisable(false)
            }
        };
        enableConfirmButton();
    }, [inputValue]);

    const handleClick = (e) => {
        if (e.target.value === 'do depósito') {
            setActiveDepositButton('selected')
            setActiveWithdrawalButton('normal')
            setOption(e.target.value)
        } else {
            setActiveDepositButton('normal')
            setActiveWithdrawalButton('selected')
            setOption(e.target.value)
        };
    }

    const handleBackClick = () => {
        navigate("/wallet");
    }

    const handleConfirmClick = () => {
        setConfirmationScreen(true)        
    }

    const transactionScreen = (
        <div className={styles.TransactionFormsComponent}>
            <div className={styles.Forms}>
                <div className={styles.Buttons}>
                    <button
                        id={styles[`${activeDepositButton}`]}
                        className={styles.DepositButton}
                        onClick={(e) => handleClick(e)}
                        value='do depósito'>
                        Depósito
                    </button>
                    <button
                        id={styles[`${activeWithdrawalButton}`]}
                        className={styles.WithdrawalButton}
                        onClick={(e) => handleClick(e)}
                        value='da retirada'>
                        Retirada
                    </button>
                </div>
                <InputGroup className={styles.Input}>
                    <Form.Control
                        onChange={({ target }) => setInputValue(target.value)}
                        placeholder={`Informe o valor ${optionChoose}`}
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
        <>{confirmationScreen ? <SuccessScreen /> : transactionScreen}</>
    );
}

export default TransactionForms;