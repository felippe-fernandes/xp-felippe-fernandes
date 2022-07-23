import { saveBalance, saveShares } from './localStorageSaves';

export const buyAndSellActions = (
  shares,
  setShares,
  shareSelected,
  sellQty,
  buyQty,
  setBalance,
  balance,
) => {
  let finalPrice = 0;
  if (buyQty === 0) {
    finalPrice = Number(sellQty) * Number(shareSelected.price);
    setBalance(balance + finalPrice);
    saveBalance(balance + finalPrice);
  } else {
    finalPrice = Number(buyQty) * Number(shareSelected.price);
    setBalance(balance - finalPrice);
    saveBalance(balance - finalPrice);
  }
  const sharesFiltered = shares.filter((share) => share !== shareSelected);
  const qty = shareSelected.qty + buyQty - sellQty;
  const qtyAvailable = shareSelected.qtyAvailable - buyQty + sellQty;
  const newShare = { ...shareSelected, qty, qtyAvailable };
  setShares([...sharesFiltered, newShare]);
  saveShares([...sharesFiltered, newShare]);
};

export const depositAndWithdrawal = (
  balance,
  setBalance,
  optionChoose,
  inputValue,
) => {
  if (optionChoose === 'do depósito') {
    setBalance(balance + inputValue);
    saveBalance(balance + inputValue);
  } else {
    setBalance(balance - inputValue);
    saveBalance(balance - inputValue);
  }
};
