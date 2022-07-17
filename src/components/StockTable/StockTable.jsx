import React from 'react';
import styles from './styles.module.css';
import { shares } from '../../helpers/tableInfos';

function StockTable() {

    const createTableRows = () => {
        return shares.map((share) => (
            <tbody key={share.name}>
                <tr>
                    <td>{share.name}</td>
                    <td>{share.qty}</td>
                    <td>{Number(share.price).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}</td>
                    <td>
                        <button>comprar</button>
                        <button>vender</button>
                    </td>
                </tr>
            </tbody>
        ));
    };
        return (
            <table className={styles.Table}>
                <thead>
                    <tr className={styles.TableHeaderRow}>
                        <th className={styles.TableHeaderData}>Ação</th>
                        <th className={styles.TableHeaderData}>Qtde</th>
                        <th className={styles.TableHeaderData}>Valor (R$)</th>
                        <th className={styles.TableHeaderData}>Negociar</th>                        
                    </tr>
                </thead>
                {createTableRows()}
            </table>

        );
    }

export default StockTable;