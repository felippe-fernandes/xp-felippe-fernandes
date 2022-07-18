import React, { useContext } from 'react';
import Context from '../../context/Context';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import styles from './styles.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

function CheckouModal() {
    // const { shareSelected } = useContext(Context)


    return (
        <div className={styles.CheckouModalComponent}>
            <h1>Comprar/Vender Ação</h1>
            <CheckoutTable />
        </div>
    );
}

export default CheckouModal;