import React, { useContext } from 'react';
import Context from '../../context/Context';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

function CheckouModal() {
    const { setShowModal } = useContext(Context)

    const handleBackClick = () => {
        setShowModal(false)
    }


    return (
        <div className={styles.CheckouModalComponent}>
            <h1>Comprar/Vender Ação</h1>
            <CheckoutTable />
            <div className={styles.QtyInputs}></div>
            <div className={styles.CheckoutButtons}>
                <button onClick={handleBackClick}><FontAwesomeIcon icon={faRotateLeft}/>Voltar</button>
                <button>Confirmar<FontAwesomeIcon icon={faCheck}/></button>
            </div>
        </div>
    );
}

export default CheckouModal;