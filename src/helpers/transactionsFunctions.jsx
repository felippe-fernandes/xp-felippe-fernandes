export const transaction = (shares, setShares, shareSelected, sellQty, buyQty) => {
    const sharesFiltered = shares.filter((share) => share !== shareSelected);
    const qty = shareSelected.qty + buyQty - sellQty;
    const qtyAvailable = shareSelected.qtyAvailable - buyQty + sellQty;
    const newShare = {...shareSelected, qty, qtyAvailable};
    setShares([...sharesFiltered, newShare]);
}