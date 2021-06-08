import React from 'react';
import { screen } from '@testing-library/react';

import App from '../App';
import renderWithRedux from '../helpers/renderWithRedux';

describe('Verifica se tem carros e botoes na tela', () => {
  test('renderiza as imagens cars na tela', () => {
    renderWithRedux(
      <App />
    )

    const numberCars = screen.getAllByRole('img');
    expect(numberCars.length).toBe(3)
  })

  test('renderiza as imagens cars na tela', () => {
    renderWithRedux(
      <App />
    )
    const inputButtons = screen.getAllByRole('button');
    expect(inputButtons.length).toBe(3);
  })
})