import React, { useState } from 'react';
import Context from './Context';


function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [shareSelected, setShareSelected] = useState([]);
  const [seeBalance, setSeeBalance] = useState(false);
  const [shares, setShares] = useState([
    { name: 'AZUL4', qtyAvailable: 3501, qty: 52, price: 12.11 },
    { name: 'PETR4', qtyAvailable: 2578, qty: 24, price: 29.02 },
    { name: 'VALE3', qtyAvailable: 8954, qty: 67, price: 68.57 },
    { name: 'CMIG4', qtyAvailable: 1258, qty: 12, price: 10.51 },
    { name: 'HOOT4', qtyAvailable: 4596, qty: 0, price: 1.79 },
    { name: 'AZEV4', qtyAvailable: 874, qty: 0, price: 2.66 },
    { name: 'DOHL4', qtyAvailable: 258, qty: 0, price: 5.64 },
    { name: 'BLUT4', qtyAvailable: 789, qty: 0, price: 0.50 },
    { name: 'MTIG4', qtyAvailable: 945, qty: 0, price: 40.00 },
    { name: 'RCSL4', qtyAvailable: 1045, qty: 0, price: 1.03 },
  ]);

  const [balance, setBalance] = useState(722.98);


  const objValue = {
    showModal, setShowModal, shareSelected, setShareSelected, seeBalance, setSeeBalance,
    shares, setShares, balance, setBalance
  };

  return (
    <Context.Provider value={objValue}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
