import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import TransactionForms from '../components/TransactionsForms/TransactionForms';
import renderWithRouter from './Utils/RenderWithRouter';
import * as transactionsFunctions from '../helpers/transactionsFunctions';

describe('Teste o componente TransactionForms', () => {
  it('Teste se o componente possui quatro botões', () => {
    renderWithRouter(<TransactionForms />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4);
  });
  it('Teste se os botões possuem os textos corretos', () => {
    renderWithRouter(<TransactionForms />);

    const depositButton = screen.getByRole('button', {
      name: /depósito/i,
    });
    const withDrawalButton = screen.getByRole('button', {
      name: /retirada/i,
    });
    const backButton = screen.getByRole('button', {
      name: /voltar/i,
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirmar/i,
    });
    expect(depositButton).toBeInTheDocument();
    expect(withDrawalButton).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();
  });
  it('Teste se existe um input', () => {
    renderWithRouter(<TransactionForms />);

    const input = screen.getByRole('spinbutton');
    expect(input).toBeInTheDocument();
  });
  it('Teste se botão Confirmar começa desabilitado', () => {
    renderWithRouter(<TransactionForms />);

    const confirmButton = screen.getByRole('button', {
      name: /confirmar/i,
    });
    expect(confirmButton).toBeDisabled();
  });
  it('Teste se ao preencher corretamente os inputs o botão confirmar é habilitado', () => {
    renderWithRouter(<TransactionForms />);

    const input = screen.getByRole('spinbutton');
    const confirmButton = screen.getByRole('button', {
      name: /confirmar/i,
    });

    expect(confirmButton).toBeDisabled();
    fireEvent.change(input, { target: { value: 100 } });
    expect(confirmButton).toBeEnabled();
  });
  it('Teste se os botões e placeholder alternam corretamente', () => {
    renderWithRouter(<TransactionForms />);

    const input = screen.getByRole('spinbutton');
    const depositButton = screen.getByRole('button', {
      name: /depósito/i,
    });
    const withDrawalButton = screen.getByRole('button', {
      name: /retirada/i,
    });

    expect(depositButton.getAttribute('id')).not.toBe('normal');
    expect(withDrawalButton.getAttribute('id')).toBe('normal');
    expect(input.getAttribute('placeholder')).toBe(
      'Informe o valor do depósito',
    );

    fireEvent.click(withDrawalButton);
    expect(withDrawalButton.getAttribute('id')).not.toBe('normal');
    expect(depositButton.getAttribute('id')).toBe('normal');
    expect(input.getAttribute('placeholder')).toBe(
      'Informe o valor da retirada',
    );

    fireEvent.click(depositButton);
    expect(depositButton.getAttribute('id')).not.toBe('normal');
    expect(withDrawalButton.getAttribute('id')).toBe('normal');
    expect(input.getAttribute('placeholder')).toBe(
      'Informe o valor do depósito',
    );
  });
  it('Teste se ao Confirmar a ação a função é chamada ao fazer um deposito', () => {
    const spyDepositAndWithdrawal = jest.spyOn(
      transactionsFunctions,
      'depositAndWithdrawal',
    );
    renderWithRouter(<TransactionForms />);

    const input = screen.getByRole('spinbutton');
    const confirmButton = screen.getByRole('button', {
      name: /confirmar/i,
    });

    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(confirmButton);
    expect(spyDepositAndWithdrawal).toBeCalled();
  });
  it('Teste se ao Confirmar a ação a função é chamada ao fazer uma retirada', () => {
    const spyDepositAndWithdrawal = jest.spyOn(
      transactionsFunctions,
      'depositAndWithdrawal',
    );
    renderWithRouter(<TransactionForms />);

    const input = screen.getByRole('spinbutton');
    const withDrawalButton = screen.getByRole('button', {
      name: /retirada/i,
    });
    const confirmButton = screen.getByRole('button', {
      name: /confirmar/i,
    });

    fireEvent.click(withDrawalButton);
    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(confirmButton);
    expect(spyDepositAndWithdrawal).toBeCalled();
  });
  it('Teste se ao clicar em voltar é redirecionado para /wallet', () => {
    const { history } = renderWithRouter(<TransactionForms />);

    const backButton = screen.getByRole('button', {
      name: /voltar/i,
    });

    fireEvent.click(backButton);
    expect(history.location.pathname).toBe('/wallet');
  });
  it('Teste se ao Confirmar a ação a tela de sucesso é mostrada', () => {
    renderWithRouter(<TransactionForms />);

    const input = screen.getByRole('spinbutton');
    const confirmButton = screen.getByRole('button', {
      name: /confirmar/i,
    });

    expect(
      screen.queryByRole('heading', {
        name: /processo realizado com sucesso!/i,
      }),
    ).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(confirmButton);
    expect(
      screen.getByRole('heading', {
        name: /processo realizado com sucesso!/i,
      }),
    ).toBeInTheDocument();
  });
  it('Teste se ao clicar em ok na tela de sucesso é redirecionado para /wallet', () => {
    const { history } = renderWithRouter(<TransactionForms />);

    const input = screen.getByRole('spinbutton');
    const confirmButton = screen.getByRole('button', {
      name: /confirmar/i,
    });

    fireEvent.change(input, { target: { value: 100 } });
    fireEvent.click(confirmButton);

    const okButton = screen.getByRole('button', {
      name: /ok/i,
    });

    expect(okButton).toBeInTheDocument();

    fireEvent.click(okButton);
    expect(history.location.pathname).toBe('/wallet');
  });
});
