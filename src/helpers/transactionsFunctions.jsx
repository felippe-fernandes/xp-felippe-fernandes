export const transaction = (shares, setShares, shareSelected, sellQty, buyQty) => {
    const sharesFiltered = shares.filter((share) => share !== shareSelected)
    const qty = shareSelected.qty + buyQty - sellQty
    let itHas;
    if (qty > 0) {
        itHas = true
    } else {
        itHas = false
    }
    const newShare = {...shareSelected, itHas, qty}
    console.log(shares);
    console.log(shareSelected);
    setShares([...sharesFiltered, newShare])
}