import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { saveEmail, saveDate } from '../../helpers/localStorageSaves.jsx';
import { validateEmail } from '../../helpers/LoginFunctions.jsx';
import styles from './styles.module.css';
import { day, hour } from '../../helpers/dateFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowr } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleClick = () => {
    saveEmail(email, Date);
    saveDate(day, hour)
  };

  useEffect(() => {
    const checkDisbale = () => {
      validateEmail(email)
      if (validateEmail || password.length >= 6) {
        setDisabled(false);
      } else { setDisabled(true); }
    };
    checkDisbale();
  }, [email, password]);

  return (
    <div className={styles.LoginPage}>
      <div className={styles.LoginBodyDiv}>
        <div className={styles.LoginInputs}>
          <InputGroup className="mb-3">
            <FormControl
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              type="email"
              placeholder="E-mail"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
              placeholder="Senha"
              aria-label="password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <button>Acessar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;