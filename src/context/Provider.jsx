import React, { useState } from 'react';
import { getShares } from '../helpers/localStorageSaves';
import Context from './Context';


function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [shareSelected, setShareSelected] = useState([]);
  const [seeBalance, setSeeBalance] = useState(false);
  const [shares, setShares] = useState(getShares());
  const [balance, setBalance] = useState(722.88);
  const [user, setUser] = useState('teste@xpinc.com');


  const objValue = {
    showModal, setShowModal, shareSelected, setShareSelected, seeBalance, setSeeBalance,
    shares, setShares, balance, setBalance, user, setUser
  };

  return (
    <Context.Provider value={objValue}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
