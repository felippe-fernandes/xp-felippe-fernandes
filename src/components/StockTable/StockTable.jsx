import React, { useContext } from 'react';
import styles from './styles.module.css';
import { shares } from '../../helpers/tableInfos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC, faV } from '@fortawesome/free-solid-svg-icons';
import Context from '../../context/Context';

function StockTable() {
    const { setShareSelected, setShowModal } = useContext(Context)

    const handleClick = (share) => {
        setShowModal(true)
        setShareSelected(share)
    }

    const myShareTable = () => {
        return shares.filter((share) => share.itHas).map((share) => (
            <tr key={share.name}>
                <td id={styles.NameColumn}>{share.name}</td>
                <td id={styles.QtyColumn}>{share.qty}</td>
                <td id={styles.PriceColumn}>{Number(share.price).toFixed(2).replace('.', ',')}</td>
                <td id={styles.ButtonsColumn}>
                    <button id={styles.BuyButton} onClick={() => handleClick(share)}><FontAwesomeIcon icon={faC} /></button>
                    <button id={styles.SellButton} onClick={() => handleClick(share)}><FontAwesomeIcon icon={faV} /></button>
                </td>
            </tr>
        ));
    };

    const otherSharesTable = () => {
        return shares.filter((share) => !share.itHas).map((share) => (
            <tr key={share.name}>
                <td id={styles.NameColumn}>{share.name}</td>
                <td id={styles.QtyColumn}>{share.qty}</td>
                <td id={styles.PriceColumn}>{Number(share.price).toFixed(2).replace('.', ',')}</td>
                <td id={styles.ButtonsColumn}>
                    <button id={styles.BuyButton}><FontAwesomeIcon icon={faC} /></button>
                    <button id={styles.SellButton} disabled={!share.itHas}><FontAwesomeIcon icon={faV} /></button>
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
                    <th className={styles.TableSubHeaderData}>Qtde</th>
                    <th className={styles.TableSubHeaderData}>Valor (R$)</th>
                    <th className={styles.TableSubHeaderData}>Negociar</th>
                </tr>
                {myShareTable()}
                <tr>
                    <td>&nbsp;</td>
                </tr>
            </tbody>
            <thead>
                <tr colSpan={3} className={styles.MergedHeaderRow}>
                    <th className={styles.MergedHeaderData}>Disponíveis para Investir:</th>
                </tr>
            </thead>
            <tbody>
                <tr className={styles.TableSubHeaderRow}>
                    <th className={styles.TableSubHeaderData}>Ação</th>
                    <th className={styles.TableSubHeaderData}>Qtde</th>
                    <th className={styles.TableSubHeaderData}>Valor (R$)</th>
                    <th className={styles.TableSubHeaderData}>Negociar</th>
                </tr>
                {otherSharesTable()}
            </tbody>
        </table>

    );
}

export default StockTable;