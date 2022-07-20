import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faMoneyBillWave, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { userInfos } from '../../helpers/Infos';
import { getBlurOption, getEmail, saveBlurOption } from '../../helpers/localStorageSaves';

function Header() {
    const [seeBalance, setSeeBalance] = useState(false);
    const [blurId, setBlurId] = useState('blur');
    const blurOption = getBlurOption();


    const handleClick = () => {
        setSeeBalance(!seeBalance)
        saveBlurOption(!getBlurOption())
    }

    useEffect(() => {
        const checkBlur = () => {
            const blurOption = getBlurOption();
            if (blurOption) {
                setBlurId('blur');
            } else { setBlurId('none'); }
        };
        checkBlur();
    }, [blurOption]);

    const balance = userInfos.balance.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    const normalBalance = (
        <>
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <p>{balance}</p>
        </>
    )

    const blurBalance = (
        <>
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <p>---------------------------</p>
        </>
    )

    return (
        <div className={styles.HeaderComponent}>
            <div className={styles.User}>
                <p><FontAwesomeIcon icon={faUserAstronaut} /> {getEmail().email.toLowerCase()}</p>
            </div>
            <div className={styles.BalanceDiv}>
                <button onClick={handleClick} >
                    {!blurOption ? <FontAwesomeIcon icon={faEye} /> :
                        <FontAwesomeIcon icon={faEyeSlash} />}
                </button>
                <div className={styles.Balance} id={styles[`${blurId}`]}>
                    <>{!blurOption ? normalBalance : blurBalance}</>
                </div>
            </div>
        </div>
    );
}

export default Header;