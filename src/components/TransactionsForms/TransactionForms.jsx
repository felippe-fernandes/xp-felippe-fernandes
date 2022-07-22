import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Context from '../../context/Context';
import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faCheck, faMoneyBill1, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import SuccessAnimation from '../../Lottie/success.json'
import { depositAndWithdrawal } from '../../helpers/transactionsFunctions';



function TransactionForms() {
    let navigate = useNavigate();
    const { balance, setBalance } = useContext(Context)
    const [activeDepositButton, setActiveDepositButton] = useState('selected')
    const [activeWithdrawalButton, setActiveWithdrawalButton] = useState('normal')
    const [confirmationScreen, setConfirmationScreen] = useState(false);
    const [confirmButtonDisable, setConfirmButtonDisable] = useState(false);
    const [inputValue, setInputValue] = useState(0);
    const [optionChoose, setOption] = useState('do depósito');

    useEffect(() => {
        const enableConfirmButton = () => {
            if (inputValue <= 0) {
                setConfirmButtonDisable(true)
            } else if (optionChoose === 'da retirada' && balance < inputValue) {
                setConfirmButtonDisable(true)
            } else {
                setConfirmButtonDisable(false)                
            }
        };
        enableConfirmButton();
    }, [balance, inputValue, optionChoose]);

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
        depositAndWithdrawal(balance, setBalance, optionChoose, inputValue)
        setConfirmationScreen(true)
    }

    const handleOkClick = () => {
        navigate("/wallet");
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
                        <div><FontAwesomeIcon icon={faMoneyBill1} className={styles.MoneyBillIcon} /><FontAwesomeIcon icon={faArrowUp} /></div>
                    </button>
                    <button
                        id={styles[`${activeWithdrawalButton}`]}
                        className={styles.WithdrawalButton}
                        onClick={(e) => handleClick(e)}
                        value='da retirada'>
                        Retirada
                        <div><FontAwesomeIcon icon={faMoneyBill1} className={styles.MoneyBillIcon} /><FontAwesomeIcon icon={faArrowDown} /></div>
                    </button>
                </div>
                <InputGroup className={styles.Input}>
                    <Form.Control
                        onChange={({ target }) => setInputValue(Number(target.value.replace('.','.')))}
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

    const confirmedTransaction = (
        <div className={styles.SuccessScreenComponent}>
            <div className={styles.SuccessScreen}>
                <h1>Processo realizado com sucesso!</h1>
                <Lottie animationData={SuccessAnimation} className={styles.Animation} />
                <button id={styles.OkButton} onClick={handleOkClick} >OK</button>
            </div>
        </div>
    )



    return (
        <>{confirmationScreen ? confirmedTransaction : transactionScreen}</>
    );
}

export default TransactionForms;