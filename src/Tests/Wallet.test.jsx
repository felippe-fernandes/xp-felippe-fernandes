import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Login from '../pages/Login/Login';
import renderWithRouter from '../Utils/RenderWithRouter';

describe('Teste a página de Login', () => {
  it('Teste se a página possui dois inputs', () => {
    renderWithRouter(<Login />);

    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(2);
  });
  it('Teste se o input de email possui o placeholder E-mail', () => {
    renderWithRouter(<Login />);

    const getEmailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const emailInputPlaceholder = getEmailInput.getAttribute('placeholder');

    expect(emailInputPlaceholder).toBe('E-mail');
  });
  it('Teste se o input de password possui o placeholder Senha', () => {
    renderWithRouter(<Login />);

    const getPasswordInput = screen.getByRole('textbox', {
      name: /password/i
    });
    const passwordInputPlaceholder = getPasswordInput.getAttribute('placeholder');

    expect(passwordInputPlaceholder).toBe('Senha');
  });

  it('Teste se existe um botão', () => {
    renderWithRouter(<Login />);

    const button = screen.getAllByRole('button');

    expect(button).toHaveLength(1);
  });
  it('Teste se o botão tem o texto Acessar', () => {
    renderWithRouter(<Login />);

    const accessButton = screen.getByRole('button', {
      name: /acessar/i
    });

    expect(accessButton).toBeInTheDocument();
  });
  it('Teste se o botão começa desabilitado', () => {
    renderWithRouter(<Login />);

    const accessButton = screen.getByRole('button', {
      name: /acessar/i
    });

    expect(accessButton).toBeDisabled();
  });
  it('Teste se o botão habilita depois de um email e uma senha válidos', () => {
    renderWithRouter(<Login />);

    const getEmailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const getPasswordInput = screen.getByRole('textbox', {
      name: /password/i
    });
    const accessButton = screen.getByRole('button', {
      name: /acessar/i
    });

    fireEvent.change(getEmailInput, { target: { value: 'teste@xpinc.com' } })
    fireEvent.change(getPasswordInput, { target: { value: '123456' } })

    expect(accessButton).toBeEnabled();
  });
  it('Teste se o botão continua desabilitado com um email e uma senha inválidos', () => {
    renderWithRouter(<Login />);

    const getEmailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const getPasswordInput = screen.getByRole('textbox', {
      name: /password/i
    });
    const accessButton = screen.getByRole('button', {
      name: /acessar/i
    });

    fireEvent.change(getEmailInput, { target: { value: 'teste@xpinc' } })
    fireEvent.change(getPasswordInput, { target: { value: '123456' } })
    expect(accessButton).toBeDisabled();

    fireEvent.change(getEmailInput, { target: { value: 'teste@xpinc.com' } })
    fireEvent.change(getPasswordInput, { target: { value: '1234' } })
    expect(accessButton).toBeDisabled();

    fireEvent.change(getEmailInput, { target: { value: 'teste@xpinc' } })
    fireEvent.change(getPasswordInput, { target: { value: '1234' } })
    expect(accessButton).toBeDisabled();
  });
  it('Teste se ao clicar no botão de acessar o usuario é redirecionado para a /wallet', () => {
    const { history } = renderWithRouter(<Login />)

    const getEmailInput = screen.getByRole('textbox', {
      name: /email/i
    });
    const getPasswordInput = screen.getByRole('textbox', {
      name: /password/i
    });
    const accessButton = screen.getByRole('button', {
      name: /acessar/i
    });

    fireEvent.change(getEmailInput, { target: { value: 'teste@xpinc.com' } })
    fireEvent.change(getPasswordInput, { target: { value: '123456' } })
    fireEvent.click(accessButton)
    expect(history.location.pathname).toBe('/wallet')
  });
});
