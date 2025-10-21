///option+shift+f to format
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  /*3b. Used the add() function to add each Pokémon 
from the results to your pokemonList variable*/
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'detailsUrl' in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log('Pokemon is incorrect');
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list'); //selecting ul element from index.html
    let listItem = document.createElement('li'); //creating li element
    let button = document.createElement('button'); //creating button element
    button.innerText = pokemon.name; //setting button text to pokemon name
    button.classList.add('pokemon-button'); //adding class to button
    button.addEventListener('click', function (event) {
      showDetails(pokemon); //adding event listener to button to show details on click
    });
    listItem.appendChild(button); //appending button to li
    pokemonListElement.appendChild(listItem); //appending li to ul
  }

  /*3a/d. loadList function that return key that uses fetch to GET 
  the complete list of Pokémon from here: https://pokeapi.co/api/v2/pokemon/*/
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
  /*6. edited showDetails function from previous lesson*/
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
    loadList: loadList, //6c. function assigned to key with same name
    loadDetails: loadDetails, //6c. function assigned to key with same name
    addListItem: addListItem,
  };
})();

/*4. Called the LoadList() function of pokemonRepository.
Then, executed getAll from the pokemonRepository*/
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    console.log(pokemon);
    pokemonRepository.addListItem(pokemon);
  });
});

/*
/*pokemonRepository.getAll().forEach(function (pokemon) {
  let output = `${pokemon.name} (height: ${
    pokemon.height + ' feet) possess the following specialty(ies):'
  } ${pokemon.types.join(', ') + '.'}`;
  if (pokemon.height > 8) {
    output += ' - Wow, that’s big!';
  }*/
