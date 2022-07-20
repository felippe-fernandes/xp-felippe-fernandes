import React, { useEffect } from 'react';
import { getEmail } from '../../helpers/localStorageSaves';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const getUser = () => {
        return getEmail().email.toLowerCase();
    }

    useEffect(() => {
        getEmail()
    },);

    return (
        <div className={styles.HeaderComponent}>
            <div className={styles.User}>
                <p><FontAwesomeIcon icon={faUserAstronaut}/> {getUser()}</p>
            </div>
        </div>
    );
}

export default Header;