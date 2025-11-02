console.log('scripts.js loaded');

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('Pokemon is incorrect');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-primary', 'btn-sm', 'btn-block'); //bootstrap button styling

    //makes the button open to bootstrap modal
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');

    //loads details, then populates the Bootstrap modal
    button.addEventListener('click', function () {
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
    });

    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }

  //fetches Pokemon list from PokeAPI
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //retrieves Pokemon information
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //populates Bootstrap modal elements with Pokemon data
  function showModal(pokemon) {
    let modalTitleElement = document.getElementById('pokemonModalLabel');
    let imageElement = document.getElementById('pokemonModalImage');
    let heightElement = document.getElementById('pokemonModalHeight');
    let typeElement = document.getElementById('pokemonModalTypes');

    modalTitleElement.textContent = pokemon.name;

    imageElement.src = pokemon.imageUrl || ''; //"Prettier" add the following: || ''
    imageElement.alt = pokemon.name || ''; //"Prettier" add the following: || ''

    heightElement.textContent = `Height: ${(pokemon.height / 10).toFixed(1)} m`;

    let types = Array.isArray(pokemon.types)
      ? pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')
      : '';
    typeElement.textContent = `Types: ${types}`;
  }

  //Returns a public function only for what is stated
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
  };
})();

//loads the Pokemon list and populates the page in alphabetical order
pokemonRepository.loadList().then(function () {
  pokemonRepository
    .getAll()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
});
