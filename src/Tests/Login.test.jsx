import { screen } from '@testing-library/react';
import React from 'react';
import Login from '../pages/Login/Login';
import renderWithRouter from '../Utils/RenderWithRouter';

describe('Teste a página de Login', () => {
  test('Teste se a página possui dois inputs', () => {
    renderWithRouter(<Login />);

    const inputs = screen.getAllByRole('textbox');
    console.log(inputs);
    expect(inputs).toHaveLength(2);
  });
  // test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  //   renderWithRouter(<About />);

  //   const getAboutPokedexText = screen.getByRole('heading',
  //     { name: /About Pokédex/i, level: 2 });
  //   expect(getAboutPokedexText).toBeInTheDocument();
  // });
  // test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  //   renderWithRouter(<About />);
  //   const arrOfParagraphs = [];
  //   const imgSection = screen.getByRole('img').parentElement.childNodes;
  //   imgSection.forEach((item) => arrOfParagraphs.push(item.nodeName));
  //   const arrFiltered = arrOfParagraphs.filter((element) => element === 'P');
  //   console.log(arrFiltered);
  //   expect(arrFiltered.length).toBe(2);
  // });
  // test('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
  //   renderWithRouter(<About />);
  //   const img = screen.getByAltText('Pokédex');
  //   expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  // });
});
