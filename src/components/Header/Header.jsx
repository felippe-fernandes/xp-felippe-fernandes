import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillWave,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import Context from '../../context/Context';
import xpLogo from '../../images/xp-inc-new.webp';
import { getUser } from '../../helpers/localStorageSaves';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

function Header() {
  const { seeBalance, setSeeBalance } = useContext(Context);
  const [blurId, setBlurId] = useState('blur');
  const user = getUser();
  let navigate = useNavigate();

  const handleClick = () => {
    setSeeBalance(!seeBalance);
  };

  useEffect(() => {
    const checkBlur = () => {
      if (!seeBalance) {
        setBlurId('blur');
      } else {
        setBlurId('none');
      }
    };
    checkBlur();
  }, [seeBalance]);

  const normalBalance = (
    <>
      <FontAwesomeIcon icon={faMoneyBillWave} />
      <p data-testid='balanceText'>
        {user.balance.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </>
  );

  const blurBalance = (
    <>
      <FontAwesomeIcon icon={faMoneyBillWave} />
      <p data-testid='balanceText'>---------------------------</p>
    </>
  );

  return (
    <div className={styles.HeaderComponent}>
      <div className={styles.Logo} onClick={() => navigate('/wallet')}>
        <img src={xpLogo} alt='XP Inc Logo' />
      </div>
      <div className={styles.Infos} data-testid='userInfos'>
        <div data-testid='userInfoHeader' className={styles.User}>
          {/* <p data-testid='userText'>
            <FontAwesomeIcon icon={faUserAstronaut} />
            {user.email.toLowerCase()}
          </p> */}
        </div>
        <DropdownMenu />
        <div className={styles.BalanceDiv}>
          <button onClick={handleClick}>
            {seeBalance ? (
              <FontAwesomeIcon icon={faEye} title='blurButton' />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} title='blurButton' />
            )}
          </button>
          <div
            data-testid='balanceInfoHeader'
            className={styles.Balance}
            id={styles[`${blurId}`]}
          >
            <>{seeBalance ? normalBalance : blurBalance}</>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
