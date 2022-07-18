import React, { useContext } from 'react';
import Context from '../../context/Context';
import styles from './styles.module.css';

function CheckoutTable() {
    const { shareSelected } = useContext(Context)


    return (
        <div className={styles.CheckoutTableComponent}>
            <table className={styles.Table}>
                <tbody>
                    <tr className={styles.TableSubHeaderRow}>
                        <td className={styles.TableSubHeaderData}>Ação</td>
                        <td className={styles.TableSubHeaderData}>Qtde</td>
                        <td className={styles.TableSubHeaderData}>Valor (R$)</td>
                    </tr>
                    <tr>
                        <td id={styles.NameColumn}>{shareSelected.name}</td>
                        <td id={styles.QtyColumn}>{shareSelected.qty}</td>
                        <td id={styles.PriceColumn}>{Number(shareSelected.price).toFixed(2).replace('.', ',')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CheckoutTable;