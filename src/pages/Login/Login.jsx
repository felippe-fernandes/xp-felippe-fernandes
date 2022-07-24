import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import {
  saveEmail,
  saveDate,
  saveBalance,
} from '../../helpers/localStorageSaves.jsx';
import { validateEmail } from '../../helpers/LoginFunctions.jsx';
import styles from './styles.module.css';
import { day, hour } from '../../helpers/dateFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/xp-inc-new.webp';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context.jsx';

function Login() {
  let navigate = useNavigate();
  const { setBalance, setUser } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    saveEmail(email);
    setUser(email);
    setBalance(722.88);
    saveBalance(722.88);
    saveDate(day, hour);
    navigate('/wallet');
  };

  const handleKeyPres = (e) => {
    if (e.key === 'Enter') {
      if (validateEmail(email) && password.length >= 6){
        handleClick(e);
      }
    }
  };

  useEffect(() => {
    const checkDisabled = () => {
      if (validateEmail(email) && password.length >= 6) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    checkDisabled();
  }, [email, password.length]);

  return (
    <div className={styles.LoginPage}>
      <div className={styles.Logo}>
        <img src={logo} alt='XP Inc Logo' />
      </div>
      <div className={styles.LoginBodyDiv}>
        <div className={styles.LoginInputs}>
          <InputGroup className={styles.mb3}>
            <FormControl
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder='E-mail'
              aria-label='Email'
              type='email'
            />
          </InputGroup>
          <InputGroup className={styles.mb3}>
            <FormControl
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              placeholder='Senha'
              aria-label='password'
              type='password'
              role='textbox'
              onKeyDown={handleKeyPres}
            />
          </InputGroup>
        </div>
        <button
          className={styles.LoginButton}
          onClick={(e) => handleClick(e)}
          disabled={disabled}
          type='submit'
        >
          <p>Acessar</p>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </button>
      </div>
    </div>
  );
}

export default Login;
