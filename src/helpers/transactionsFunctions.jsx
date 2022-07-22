export const buyAndSellActions = (shares, setShares, shareSelected, sellQty, buyQty) => {
    const sharesFiltered = shares.filter((share) => share !== shareSelected);
    const qty = shareSelected.qty + buyQty - sellQty;
    const qtyAvailable = shareSelected.qtyAvailable - buyQty + sellQty;
    const newShare = { ...shareSelected, qty, qtyAvailable };
    setShares([...sharesFiltered, newShare]);
}

export const depositAndWithdrawal = (balance, setBalance, optionChoose, inputValue) => {
    console.log(typeof inputValue, inputValue);
    if (optionChoose === 'do depósito') {
        setBalance(balance + inputValue)
    } else {
        setBalance(balance - inputValue)
    }
}