import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente <PokemonDetails.js />', () => {
  beforeEach(() => { renderWithRouter(<App />); });
  test('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    // A página deve conter um texto <name> Details, onde <name> é o nome do Pokémon;
    const detailsSubtitle = screen.getByRole('heading', {
      name: 'Pikachu Details',
      level: 2,
    });
    expect(detailsSubtitle).toBeInTheDocument();

    // Não deve existir o link de navegação para os detalhes do Pokémon selecionado;
    expect(detailsLink).not.toBeInTheDocument();

    // A seção de detalhes deve conter um heading h2 com o texto Summary;
    const summarySubtitle = screen.getByRole('heading', {
      name: 'Summary',
      level: 2,
    });
    expect(summarySubtitle).toBeInTheDocument();

    // A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado;
    const info = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i);
    expect(info).toBeVisible();
  });

  test('Testa se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    // Na seção de detalhes deverá existir um heading h2 com o texto Game Locations of <name>; onde <name> é o nome do Pokémon exibido;
    const localSubtitle = screen.getByRole('heading', {
      name: 'Game Locations of Pikachu',
      level: 2,
    });
    expect(localSubtitle).toBeInTheDocument();

    // Todas as localizações do Pokémon devem ser mostradas na seção de detalhes;
    const localizationOne = screen.getByText(/Kanto Viridian Forest/i);
    const localizationTwo = screen.getByText(/Kanto Power Plant/i);
    expect(localizationOne).toBeVisible();
    expect(localizationTwo).toBeVisible();

    // A imagem da localização deve ter um atributo src com a URL da localização;
    const viridianForest = 'https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png';
    const powerPlant = 'https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png';

    const images = screen.getAllByRole('img', { name: 'Pikachu location' });
    expect(images[0]).toHaveAttribute('src', viridianForest);
    expect(images[1]).toHaveAttribute('src', powerPlant);
  });

  test('Testa se o usuário pode favoritar um Pokémon através da página de detalhes:', () => {
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);

    // O label do checkbox deve conter o texto Pokémon favoritado?.
    const favoriteCheckbox = screen.getByLabelText('Pokémon favoritado?');

    // A página deve exibir um checkbox que permite favoritar o Pokémon;
    expect(favoriteCheckbox).toBeInTheDocument();

    // Cliques alternados no checkbox devem adicionar e remover respectivamente o Pokémon da lista de favoritos;
    userEvent.click(favoriteCheckbox);
    expect(favoriteCheckbox).toBeChecked();

    userEvent.click(favoriteCheckbox);
    expect(favoriteCheckbox).not.toBeChecked();
  });
});
