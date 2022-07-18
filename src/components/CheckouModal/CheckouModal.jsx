import React, { useContext } from 'react';
import Context from '../../context/Context';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Form, InputGroup } from 'react-bootstrap';

function CheckouModal() {
    const { setShowModal } = useContext(Context)

    const handleBackClick = () => {
        setShowModal(false)
    }


    return (
        <div className={styles.CheckouModalComponent}>
            <div className={styles.FirstDiv}>
                <h1>Comprar/Vender Ação</h1>
                <CheckoutTable />
            </div>
            <div className={styles.QtyInputs}>
                <InputGroup className={styles.Inputs}>
                    <InputGroup.Text id="BuyButton">Comprar</InputGroup.Text>
                    <Form.Control
                        placeholder="Informe o valor"
                        aria-label="Buy Input"
                    />
                </InputGroup>
                <InputGroup className={styles.Inputs}>
                    <InputGroup.Text id="SellButton">Vender</InputGroup.Text>
                    <Form.Control
                        placeholder="Informe o valor"
                        aria-label="Sell Input"
                    />
                </InputGroup>
            </div>
            <div className={styles.CheckoutButtons}>
                <button onClick={handleBackClick}><FontAwesomeIcon icon={faRotateLeft} />Voltar</button>
                <button>Confirmar<FontAwesomeIcon icon={faCheck} /></button>
            </div>
        </div>
    );
}

export default CheckouModal;