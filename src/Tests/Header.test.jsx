import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Header from '../components/Header/Header';
import renderWithRouter from './Utils/RenderWithRouter';
import { defaultUser } from './Mocks/';

describe('Teste o componente Header', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    jest.restoreAllMocks();
  });

  it('Teste se o componente possui as duas divs de infoinformações', () => {
    renderWithRouter(<Header />);
    const balanceInfoHeader = screen.getByTestId('balanceInfoHeader');
    const userInfoHeader = screen.getByTestId('userInfoHeader');
    expect(userInfoHeader && balanceInfoHeader).toBeInTheDocument();
  });
  it('Teste se a userInfo possui o mesmo e-mail do localStorage', () => {
    renderWithRouter(<Header />);
    const storedUserEmail = JSON.parse(localStorage.getItem('user')).email;

    const userText = screen.getByText(storedUserEmail);
    expect(userText).toBeInTheDocument();
  });
  it('Teste se a balanceInfo possui o mesmo balance do localStorage', () => {
    renderWithRouter(<Header />);
    const storedUserBalance = JSON.parse(localStorage.getItem('user')).balance;
    const finalBalanceShowed = `R$ ${storedUserBalance
      .toString()
      .replace('.', ',')}`;
    const blurButton = screen.getByRole('img', { name: /blurbutton/i });
    const balanceText = screen.getByTestId('balanceText');
    expect(balanceText).toContainHTML('---------------------------');

    fireEvent.click(blurButton);
    expect(balanceText).toHaveTextContent(finalBalanceShowed);
  });
  it('Teste se é possivel borrar o Balance', () => {
    renderWithRouter(<Header />);

    const balanceInfoHeader = screen.getByTestId('balanceInfoHeader');
    expect(balanceInfoHeader.getAttribute('id')).toBe('blur');

    const blurButton = screen.getByRole('img', { name: /blurbutton/i });
    fireEvent.click(blurButton);

    expect(balanceInfoHeader.getAttribute('id')).not.toBe('blur');
  });

  it('Teste se é ao clicar em Logout é redirecionado para /', () => {
    const { history } = renderWithRouter(<Header />);

    const storedUserEmail = JSON.parse(localStorage.getItem('user')).email;
    const userText = screen.getByText(storedUserEmail);
    const logoutButton = screen.getByText(/logout/i);

    fireEvent.click(userText);
    fireEvent.click(logoutButton);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedDate = JSON.parse(localStorage.getItem('date'));
    expect(storedUser).toBeFalsy();
    expect(storedDate).toBeFalsy();
    expect(history.location.pathname).toBe('/');
  });
});
