import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faMoneyBillWave, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { userInfos } from '../../helpers/Infos';
import { getEmail } from '../../helpers/localStorageSaves';
import Context from '../../context/Context';
import xpLogo from '../../images/xp-inc-new.webp'

function Header() {
    const { seeBalance, setSeeBalance } = useContext(Context);
    const [blurId, setBlurId] = useState('blur');


    const handleClick = () => {
        setSeeBalance(!seeBalance)
    }

    useEffect(() => {
        const checkBlur = () => {
            if (!seeBalance) {
                setBlurId('blur');
            } else { setBlurId('none'); }
        };
        checkBlur();
    }, [seeBalance]);

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
            <div className={styles.Logo}>
                <img src={xpLogo} alt="XP Inc Logo" />
            </div>
            <div className={styles.Infos}>
                <div className={styles.User}>
                    <p><FontAwesomeIcon icon={faUserAstronaut} /> {getEmail().email.toLowerCase()}</p>
                </div>
                <div className={styles.BalanceDiv}>
                    <button onClick={handleClick} >
                        {seeBalance ? <FontAwesomeIcon icon={faEye} /> :
                            <FontAwesomeIcon icon={faEyeSlash} />}
                    </button>
                    <div className={styles.Balance} id={styles[`${blurId}`]}>
                        <>{seeBalance ? normalBalance : blurBalance}</>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;