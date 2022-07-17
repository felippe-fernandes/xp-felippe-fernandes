import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Wallet from './pages/Wallet/Wallet';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
