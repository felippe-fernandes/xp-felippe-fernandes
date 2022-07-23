import { fireEvent, screen, } from '@testing-library/react';
import React from 'react';
import Wallet from '../pages/Wallet/Wallet';
import renderWithRouter from './Utils/RenderWithRouter';

describe('Teste a página de Wallet', () => {
  it('Teste se a página possui uma tabela', () => {
    renderWithRouter(<Wallet />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
  it('Teste se a tabela possui todos os cabeçalhos', () => {
    renderWithRouter(<Wallet />);

    const tableColumnHeader = screen.getAllByRole('columnheader');
    expect(tableColumnHeader).toHaveLength(11);
  });
  it('Teste se existe uma coluna de botões em cada linha', () => {
    renderWithRouter(<Wallet />);

    const getTableRows = screen.getAllByTestId('tableRow').length
    const buttonColumn = screen.getAllByTestId('buttonColumn').length
    expect(buttonColumn).toBe(getTableRows)
  });
  it('Teste se existem dois botões na coluna Negociar', () => {
    renderWithRouter(<Wallet />);

    const getNumberOfRows = screen.getAllByTestId('tableRow').length
    const buyButton = screen.getAllByTestId('buyButton')
    const sellButton = screen.getAllByTestId('sellButton')
    console.log(getNumberOfRows);
    expect(buyButton && sellButton).toHaveLength(getNumberOfRows)
  })
  it('Teste se ao clicar em um dos botões da coluna Negotiate o Modal é aberto', () => {
    renderWithRouter(<Wallet />)

    const getNumberOfRows = screen.getAllByTestId('tableRow').length;
    const buyButton = screen.getAllByTestId('buyButton')
    fireEvent.click(buyButton[Math.floor(Math.random() * getNumberOfRows)])
    expect(document.body).toHaveClass('ReactModal__Body--open')
  });
  it('Teste se existe o botão de Depósito/Retirada', () => {
    renderWithRouter(<Wallet />)

    const getDepositAndWithDrawalButton = screen.getByRole('button', {
      name: /depósito\/retirada/i
    })
    expect(getDepositAndWithDrawalButton).toBeInTheDocument();
  });
  it('Teste se ao clicar no botão de Depósito/Retirad o usuario é redirecionado para a /payment', () => {
    const { history } = renderWithRouter(<Wallet />)

    const getDepositAndWithDrawalButton = screen.getByRole('button', {
      name: /depósito\/retirada/i
    })

    fireEvent.click(getDepositAndWithDrawalButton)
    expect(history.location.pathname).toBe('/payment')
  });
});
