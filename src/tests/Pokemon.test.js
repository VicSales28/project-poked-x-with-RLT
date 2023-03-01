import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pokemon from '../components/Pokemon';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente <Pokemon.js />', () => {
  const testedPokemon = {
    id: 148,
    name: 'Dragonair',
    type: 'Dragon',
    averageWeight: {
      value: '16.5',
      measurementUnit: 'kg',
    },
    image: 'https://archives.bulbagarden.net/media/upload/2/2c/Spr_5b_148.png',
    moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)',
    foundAt: [
      {
        location: 'Johto Route 45',
        map: 'https://archives.bulbagarden.net/media/upload/2/21/Johto_Route_45_Map.png',
      },
      {
        location: 'Johto Dragon\'s Den',
        map: 'https://archives.bulbagarden.net/media/upload/1/1e/Johto_Dragons_Den_Map.png',
      },
    ],
    summary: 'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
  };

  test('Testa se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<Pokemon pokemon={ testedPokemon } isFavorite={ false } />);
    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const pokemonImage = screen.getByRole('img');
    const altText = `${testedPokemon.name} sprite`;
    const url = testedPokemon.image;
    expect(pokemonName).toBeVisible();
    expect(pokemonName).toHaveTextContent(/Dragonair/i);
    expect(pokemonType).toBeVisible();
    expect(pokemonType).toHaveTextContent(/Dragon/i);
    expect(pokemonWeight).toBeVisible();
    expect(pokemonWeight).toHaveTextContent(/Average weight: 16.5 kg/i);
    expect(pokemonImage).toBeVisible();
    expect(pokemonImage).toHaveAttribute('alt', altText);
    expect(pokemonImage).toHaveAttribute('src', url);
  });

  test('Testa se o card do Pokémon contém um link de navegação para exibir detalhes deste Pokémon', () => {
    renderWithRouter(<Pokemon pokemon={ testedPokemon } isFavorite={ false } />);
    const detailsLink = screen.getByRole('link', { name: 'More details' });
    const linkDestination = `/pokemon/${testedPokemon.id}`;
    expect(detailsLink).toBeVisible();
    expect(detailsLink).toHaveAttribute('href', linkDestination);
  });

  test('Testa se ao clicar no link de navegação, é feito o redirecionamento para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<Pokemon
      pokemon={ testedPokemon }
      isFavorite={ false }
    />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/148');
  });

  test('Testa se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<Pokemon pokemon={ testedPokemon } isFavorite />);
    const favoriteIcon = screen.getByAltText('Dragonair is marked as favorite');
    expect(favoriteIcon.src).toContain('/star-icon.svg');
  });
});
