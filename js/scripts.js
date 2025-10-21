///option+shift+f to format
let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bouffalant', height: 5, types: ['Normal, Thinking'] },
    { name: 'Yveltal', height: 19, types: ['Dark, Flying'] },
    { name: 'Haunter', height: 5, types: ['Ghost, Poison'] },
    { name: 'Noctowl', height: 5, types: ['Normal, Flying'] },
    { name: 'Solosis', height: 2, types: ['Psychic, Coding'] },
    { name: 'Melmetal', height: 8, types: ['Steel, Sitting Around All Day'] },
  ];

  //new function to show details of pokemon
  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list'); //selecting ul element from index.html
    let listItem = document.createElement('li'); //creating li element
    let button = document.createElement('button'); //creating button element
    button.innerText = pokemon.name; //setting button text to pokemon name
    button.classList.add('pokemon-button'); //adding class to button

    button.addEventListener('click', function () {
      showDetails(pokemon); //adding event listener to button to show details on click
    });

    listItem.appendChild(button); //appending button to li
    pokemonListElement.appendChild(listItem); //appending li to ul
  } //this is an IIFE

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
    addListItem: addListItem,
  };
})();

//Adding all pokemon to the list
pokemonRepository.getAll().forEach(function (pokemon) {
  let output = `${pokemon.name} (height: ${
    pokemon.height + ' feet) possess the following specialty(ies):'
  } ${pokemon.types.join(', ') + '.'}`;
  if (pokemon.height > 8) {
    output += ' - Wow, that’s big!';
  }
  console.log(pokemon);
  pokemonRepository.addListItem(pokemon);
});
