import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [shareSelected, setShareSelected] = useState([]);

  const objValue = {showModal, setShowModal, shareSelected, setShareSelected};

  return (
    <Context.Provider value={objValue}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
