import { screen } from '@testing-library/react';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente <FavoritePokemon.js />', () => {
  test('Testa se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos;', () => {
    renderWithRouter(<FavoritePokemon />);
    const emptyFavorites = screen.getByText(/no favorite pokémon found/i);
    expect(emptyFavorites).toBeInTheDocument();
  });

  test('Testa se apenas são exibidos os Pokémon favoritados.', () => {
    const testedPokemons = [
      {
        id: 143,
        name: 'Snorlax',
        type: 'Normal',
        averageWeight: {
          value: '460.0',
          measurementUnit: 'kg',
        },
        image: 'https://archives.bulbagarden.net/media/upload/4/40/Spr_5b_143.png',
        moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)',
        foundAt: [
          {
            location: 'Kanto Vermillion City',
            map: 'https://archives.bulbagarden.net/media/upload/5/54/Kanto_Vermilion_City_Map.png',
          },
        ],
        summary: 'What sounds like its cry may actually be its snores or the rumblings of its hungry belly.',
      },
      {
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
      },
    ];

    renderWithRouter(<FavoritePokemon pokemonList={ testedPokemons } />);
    const allPokemonsNames = screen.getAllByTestId('pokemon-name');
    const allPokemonsTypes = screen.getAllByTestId('pokemon-type');
    const allPokemonsWeight = screen.getAllByTestId('pokemon-weight');
    expect(allPokemonsNames).toHaveLength(2);
    expect(allPokemonsTypes).toHaveLength(2);
    expect(allPokemonsWeight).toHaveLength(2);
  });
});
