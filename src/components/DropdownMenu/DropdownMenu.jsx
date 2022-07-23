import React from 'react';
import styles from './styles.module.css';
import { getUser } from '../../helpers/localStorageSaves';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {
  const user = getUser();
  let navigate = useNavigate();

  const handleChage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('date');
    navigate('/');
  };

  const options = [
    {
      value: 'user',
      label: (
        <>
          <FontAwesomeIcon icon={faUserAstronaut} />
          <span>{user.email.toLowerCase()}</span>
        </>
      ),
    },
    {
      value: 'logout',
      label: (
        <>
          <span>Logout</span>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </>
      ),
    },
  ];

  return (
    <Select
      autoFocus
      defaultValue={options[0]}
      options={options}
      className={styles.Select}
      isSearchable={false}
      hideSelectedOptions
      onChange={handleChage}
      closeMenuOnScroll
    />
  );
}

export default DropdownMenu;
