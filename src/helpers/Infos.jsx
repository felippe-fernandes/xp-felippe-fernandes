import { getEmail } from '../helpers/localStorageSaves';

export const shares = [
    { name: 'AZUL4', qty: 100, price: 350.00, itHas: true },
    { name: 'PETR4', qty: 100, price: 350.00, itHas: true },
    { name: 'VALE4', qty: 100, price: 350.00, itHas: true },
    { name: 'CMIG4', qty: 100, price: 350.00, itHas: true },
    { name: 'HOOT4', qty: 1, price: 350.00, itHas: false },
    { name: 'AZEV4', qty: 1, price: 350.00, itHas: false },
    { name: 'DOHL4', qty: 1, price: 350.00, itHas: false },
    { name: 'BLUT4', qty: 1, price: 350.00, itHas: false },
    { name: 'MTIG4', qty: 1, price: 350.00, itHas: false },
    { name: 'RCSL4', qty: 1, price: 350.00, itHas: false },
]

const getUser = () => {
    return getEmail().email.toLowerCase();
}

export const userInfos = {user: getUser(), balance: 999.99};