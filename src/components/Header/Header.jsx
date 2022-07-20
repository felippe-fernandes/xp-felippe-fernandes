import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faMoneyBillWave, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { userInfos } from '../../helpers/Infos';

function Header() {
    const [seeBalance, setSeeBalance] = useState(false)
    const [blurId, setBlurId] = useState('blur')


    const handleClick = () => {
        setSeeBalance(!seeBalance)
    }

    useEffect(() => {
        const checkDisbale = () => {
            if (!seeBalance) {
                setBlurId('none');
            } else { setBlurId('blur'); }
        };
        checkDisbale();
    }, [seeBalance]);

    const balance = userInfos.balance.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    const normalBalance = (
        <p>
            <FontAwesomeIcon icon={faMoneyBillWave} />
            {balance}
        </p>
    )

    const blurBalance = (
        <p>
            <FontAwesomeIcon icon={faMoneyBillWave} />
            ------
        </p>
    )

    return (
        <div className={styles.HeaderComponent}>
            <div className={styles.User}>
                <p><FontAwesomeIcon icon={faUserAstronaut} /> {userInfos.user}</p>
            </div>
            <div className={styles.BalanceDiv}>
                <button onClick={handleClick} >
                    {seeBalance ? <FontAwesomeIcon icon={faEyeSlash} /> :
                        <FontAwesomeIcon icon={faEye} />}
                </button>
                <div className={styles.Balance} id={styles[`${blurId}`]}>
                    <>{seeBalance ? blurBalance : normalBalance}</>
                </div>
            </div>
        </div>
    );
}

export default Header;