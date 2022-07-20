import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [shareSelected, setShareSelected] = useState([]);
  const [seeBalance, setSeeBalance] = useState(false);

  const objValue = {showModal, setShowModal, shareSelected, setShareSelected, seeBalance, setSeeBalance};

  return (
    <Context.Provider value={objValue}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
