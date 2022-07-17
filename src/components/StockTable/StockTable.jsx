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
            <table className="table">
                <thead>
                    <tr className="table_header_row">
                        <th className="table_header_data">Ação</th>
                        <th className="table_header_data">Qtde</th>
                        <th className="table_header_data">Valor (R$)</th>
                        <th className="table_header_data">Negociar</th>                        
                    </tr>
                </thead>
                {createTableRows()}
            </table>

        );
    }

export default StockTable;