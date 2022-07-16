import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { saveEmail, saveDate } from '../../helpers/localStorageSaves.jsx';
import { validateEmail } from '../../helpers/LoginFunctions.jsx';
import styles from './styles.module.css';
import { day, hour} from '../../helpers/dateFunctions'

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
      <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </div>
      </div>
    </div>
  );
}

export default Login;
