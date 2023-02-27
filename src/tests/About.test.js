import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testa o componente <About.js />', () => {
  beforeEach(() => { renderWithRouter(<About />); });
  test('Testa se a página contém as informações sobre a Pokédex', () => {
    const info = screen.getByText(/a digital encyclopedia containing all Pokémon/i);
    expect(info).toBeVisible();
  });

  test('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    const title = screen.getByRole('heading', {
      name: 'About Pokédex',
      level: 2,
    });
    expect(title).toBeVisible();
  });

  test('Testa se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
    const firstParagraph = screen.getByText('This application simulates a Pokédex, a digital encyclopedia containing all Pokémon');
    const secondParagraph = screen.getByText('One can filter Pokémon by type, and see more details for each one of them');
    expect(firstParagraph).toBeVisible();
    expect(secondParagraph).toBeVisible();
  });

  test('Testa se a página contém a seguinte imagem de uma Pokédex', () => {
    const image = screen.getByRole('img');
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', url);
  });
});
