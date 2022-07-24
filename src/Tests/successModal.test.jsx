import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import SuccessScreen from '../components/SuccessScreen/SuccessScreen';
import renderWithRouter from './Utils/RenderWithRouter';

describe('Teste o componente SuccessScreen', () => {
  it('Teste se a página possui um titulo', () => {
    renderWithRouter(<SuccessScreen />);

    const successScreenTitle = screen.getByRole('heading', {
      name: /processo realizado com sucesso!/i,
    });
    expect(successScreenTitle).toBeInTheDocument();
  });
  it('Teste se a página possui um dois botões', () => {
    renderWithRouter(<SuccessScreen />);

    const successScreenButtons = screen.getAllByRole('button');
    expect(successScreenButtons).toHaveLength(2);
  });
  it('Teste se ao clicar no botão fechar (x) ou no botão OK, o modal é fechado', () => {
    renderWithRouter(<SuccessScreen />);

    const successScreenButtons = screen.getByRole('button', {
      name: /ok/i,
    });
    const closeButton = screen.getByTestId('closeModalButton');

    fireEvent.click(successScreenButtons);
    expect(document.body).not.toHaveClass('ReactModal__Body--open');
    fireEvent.click(closeButton);
    expect(document.body).not.toHaveClass('ReactModal__Body--open');
  });
});
