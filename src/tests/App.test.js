import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o componente <App.js />', () => {
  test('Testa se o topo da aplicação contém um conjunto de links de navegação:', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });

  test('Testa se a aplicação é redirecionada para a página inicial ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    userEvent.click(homeLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Testa se a aplicação é redirecionada para a página de About ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('Testa se a aplicação é redirecionada para a página de Pokémon Favoritados ao clicar no link Favorite Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    userEvent.click(favoriteLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('Testa se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/anything');
    });
    const textNotFound = screen.getByRole('heading', {
      name: 'Page requested not found',
      level: 2,
    });
    expect(textNotFound).toBeInTheDocument();
  });
});
