import React, { useContext } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faV } from '@fortawesome/free-solid-svg-icons';
import Context from '../../context/Context';
import { alphabeticSort } from '../../helpers/otherFunctions';

function StockTable() {
  const { setShareSelected, setShowModal, shares } = useContext(Context);

  const handleClick = (share) => {
    setShowModal(true);
    setShareSelected(share);
  };

  const myShareTable = () => {
    return shares
      .sort(alphabeticSort)
      .filter((share) => share.qty > 0)
      .map((share, index) => (
        <tr key={share.name} data-testid={`tableRow`}>
          <td id={styles.NameColumn}>{share.name}</td>
          <td id={styles.QtyColumn}>{share.qty}</td>
          <td id={styles.PriceColumn}>
            {Number(share.price).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </td>
          <td id={styles.TotalPriceColumn}>
            {Number(share.price * share.qty).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </td>
          <td id={styles.ButtonsColumn} data-testid='buttonColumn'>
            <button
              id={styles.BuyButton}
              data-testid='buyButton'
              onClick={() => handleClick(share)}
            >
              <FontAwesomeIcon icon={faC} />
            </button>
            <button
              id={styles.SellButton}
              data-testid='sellButton'
              onClick={() => handleClick(share)}
            >
              <FontAwesomeIcon icon={faV} />
            </button>
          </td>
        </tr>
      ));
  };

  const otherSharesTable = () => {
    return shares.sort(alphabeticSort).map((share, index) => (
      <tr key={share.name} data-testid={`tableRow`}>
        <td id={styles.NameColumn}>{share.name}</td>
        <td id={styles.QtyColumn}>{share.qtyAvailable}</td>
        <td id={styles.PriceColumn}>
          {Number(share.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </td>
        <td id={styles.ButtonsColumn} data-testid='buttonColumn'>
          <button
            id={styles.BuyButton}
            data-testid='buyButton'
            onClick={() => handleClick(share)}
          >
            <FontAwesomeIcon icon={faC} />
          </button>
          <button
            id={styles.SellButton}
            data-testid='sellButton'
            onClick={() => handleClick(share)}
            disabled={!share.itHas}
          >
            <FontAwesomeIcon icon={faV} />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table className={styles.Table}>
      <thead>
        <tr colSpan={3} className={styles.MergedHeaderRow}>
          <th className={styles.MergedHeaderData}>Minhas Ações:</th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.TableSubHeaderRow}>
          <th className={styles.TableSubHeaderData}>Ação</th>
          <th className={styles.TableSubHeaderData}>Minhas ações</th>
          <th className={styles.TableSubHeaderData}>Valor Unitário</th>
          <th className={styles.TableSubHeaderData}>Valor Total</th>
          <th className={styles.TableSubHeaderData}>Negociar</th>
        </tr>
        {myShareTable()}
        <tr>
          <td id={styles.BlankRow}>&nbsp;</td>
        </tr>
      </tbody>
      <thead>
        <tr colSpan={3} className={styles.MergedHeaderRow}>
          <th className={styles.MergedHeaderData}>
            Disponíveis para Investir:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={styles.TableSubHeaderRow}>
          <th className={styles.TableSubHeaderData}>Ação</th>
          <th className={styles.TableSubHeaderData}>Disponiveis</th>
          <th className={styles.TableSubHeaderData}>Valor Unitário</th>
          <th className={styles.TableSubHeaderData}>Negociar</th>
        </tr>
        {otherSharesTable()}
      </tbody>
    </table>
  );
}

export default StockTable;
