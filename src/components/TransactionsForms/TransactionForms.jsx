import React from 'react';
import styles from './styles.module.css';
import { Form, InputGroup } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

function TransactionForms() {

    return (
        <div className={styles.TransactionFormsComponent}>
                <div className={styles.Buttons}>
                    <button>Depósito</button>
                    <button>Retirada</button>
                </div>
                <InputGroup className={styles.Input}>
                    <Form.Control
                        onChange={({ target }) => console.log(target.value)}
                        placeholder="Informe o valor"
                        aria-label="Sell Input"
                        type='number'
                    />
                </InputGroup>
        </div>
    );
}

export default TransactionForms;