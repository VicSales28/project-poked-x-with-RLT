import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente <NotFound.js />', () => {
  beforeEach(() => { renderWithRouter(<NotFound />); });
  test('Testa se a página contém um heading h2 com o texto Page requested not found', () => {
    const textNotFound = screen.getByRole('heading', {
      name: 'Page requested not found',
      level: 2,
    });
    expect(textNotFound).toBeVisible();
  });

  test('Testa se a página mostra a imagem escolhida', () => {
    const image = screen.getByRole('img');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', url);
  });
});
