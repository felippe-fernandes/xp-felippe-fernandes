// User
if (!JSON.parse(localStorage.getItem('user'))) {
  localStorage.setItem(
    'user',
    JSON.stringify({ email: 'teste@xpinc.com', balance: 722.88 }),
  );
}

// Email
export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const saveEmail = (email) => {
  localStorage.setItem('user', JSON.stringify({ ...getUser(), email }));
};
export const saveBalance = (balance) => {
  localStorage.setItem('user', JSON.stringify({ ...getUser(), balance }));
};

//

// Date

if (!JSON.parse(localStorage.getItem('date'))) {
  localStorage.setItem(
    'date',
    JSON.stringify({ day: '16 de julho de 2022', hour: '15:18' }),
  );
}

export const getDate = () => JSON.parse(localStorage.getItem('date'));

export const saveDate = (day, hour) => {
  localStorage.setItem('date', JSON.stringify({ day, hour }));
};
//

// Shares

if (!JSON.parse(localStorage.getItem('shares'))) {
  localStorage.setItem(
    'shares',
    JSON.stringify([
      { name: 'AZUL4', qtyAvailable: 3501, qty: 52, price: 12.11 },
      { name: 'PETR4', qtyAvailable: 2578, qty: 24, price: 29.02 },
      { name: 'VALE3', qtyAvailable: 8954, qty: 67, price: 68.57 },
      { name: 'CMIG4', qtyAvailable: 1258, qty: 12, price: 10.51 },
      { name: 'HOOT4', qtyAvailable: 4596, qty: 0, price: 1.79 },
      { name: 'AZEV4', qtyAvailable: 874, qty: 0, price: 2.66 },
      { name: 'DOHL4', qtyAvailable: 258, qty: 0, price: 5.64 },
      { name: 'BLUT4', qtyAvailable: 789, qty: 0, price: 0.5 },
      { name: 'MTIG4', qtyAvailable: 945, qty: 0, price: 40.0 },
      { name: 'RCSL4', qtyAvailable: 1045, qty: 0, price: 1.03 },
      { name: 'ABCB4', qtyAvailable: 478, qty: 0, price: 16.35 },
      { name: 'BBDC4', qtyAvailable: 896, qty: 0, price: 17.05 },
      { name: 'ITSA4', qtyAvailable: 1235, qty: 0, price: 8.47 },
      { name: 'FESA4', qtyAvailable: 15, qty: 0, price: 44.31 },
      { name: 'GGBR4', qtyAvailable: 257, qty: 0, price: 23.81 },
      { name: 'GOLL4', qtyAvailable: 136, qty: 0, price: 7.97 },
      { name: 'FLRY3', qtyAvailable: 457, qty: 0, price: 15.27 },
      { name: 'MDIA3', qtyAvailable: 965, qty: 0, price: 30.85 },
      { name: 'SBSP3', qtyAvailable: 658, qty: 0, price: 43.55 },
      { name: 'UNIP6', qtyAvailable: 1045, qty: 0, price: 88.50 },
      { name: 'VIVA3', qtyAvailable: 258, qty: 0, price: 21.24 },
      { name: 'BPAN4', qtyAvailable: 859, qty: 0, price: 7.08 },
      { name: 'MGEL3', qtyAvailable: 325, qty: 0, price: 74.10 },
      { name: 'GOGL34', qtyAvailable: 1369, qty: 25, price: 3.97 },
      { name: 'MSFT34', qtyAvailable: 968, qty: 32, price: 59.45 },
      { name: 'AAPL34', qtyAvailable: 719, qty: 50, price: 84.86 },
      { name: 'TSLA34', qtyAvailable: 69, qty: 0, price: 140.25 },
      { name: 'AMZO34', qtyAvailable: 159, qty: 0, price: 4.24 },
      { name: 'DISB34', qtyAvailable: 583, qty: 0, price: 37.50 },
      { name: 'BERK34', qtyAvailable: 583, qty: 0, price: 78.92 },
    ]),
  );
}

export const getShares = () => JSON.parse(localStorage.getItem('shares'));

export const saveShares = (share) => {
  localStorage.setItem('shares', JSON.stringify(share));
};
//
