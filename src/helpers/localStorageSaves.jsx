// User
if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem('user', JSON.stringify({email: 'teste@xpinc.com', balance: 722.88}));
}

// Email
export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const saveEmail = (email) => {
  localStorage.setItem('user', JSON.stringify({...getUser(), email}));
};
export const saveBalance = (balance) => {
  localStorage.setItem('user', JSON.stringify({...getUser(), balance}));
};

//

// Date

if (!JSON.parse(localStorage.getItem('date'))) {
  localStorage.setItem('date', JSON.stringify({ day: '16 de julho de 2022', hour: '15:18' }));
}

export const getDate = () => JSON.parse(localStorage.getItem('date'));

export const saveDate = (day, hour) => {
  localStorage.setItem('date', JSON.stringify({ day, hour }));
};
//

// Shares

if (!JSON.parse(localStorage.getItem('shares'))) {
  localStorage.setItem('shares', JSON.stringify([
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
  ]));
}

export const getShares = () => JSON.parse(localStorage.getItem('shares'));

export const saveShares = (share) => {
  localStorage.setItem('shares', JSON.stringify(share));
};
//
