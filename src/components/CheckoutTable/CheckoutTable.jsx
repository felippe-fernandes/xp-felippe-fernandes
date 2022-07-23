import React, { useContext } from 'react';
import Context from '../../context/Context';
import styles from './styles.module.css';

function CheckoutTable() {
  const { shareSelected } = useContext(Context);

  return (
    <div className={styles.CheckoutTableComponent}>
      <table className={styles.Table} data-testid='CheckoutTable'>
        <tbody>
          <tr className={styles.TableSubHeaderRow}>
            <td className={styles.TableSubHeaderData}>Ação</td>
            <td className={styles.TableSubHeaderData}>Minhas Ações</td>
            <td className={styles.TableSubHeaderData}>Quantidade Disponivel</td>
            <td className={styles.TableSubHeaderData}>Valor Unitário</td>
          </tr>
          <tr>
            <td id={styles.NameColumn}>{shareSelected.name}</td>
            <td id={styles.QtyColumn}>{shareSelected.qty}</td>
            <td id={styles.TotalQtyColumn}>{shareSelected.qtyAvailable}</td>
            <td id={styles.PriceColumn}>
              {Number(shareSelected.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CheckoutTable;
