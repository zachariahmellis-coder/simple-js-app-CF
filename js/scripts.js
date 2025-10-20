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

  return {
    add: function (pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function () {
      return pokemonList;
    },
  };
})(); //this is an IIFE

//updated forEach loop to retrieve array from IIFE
pokemonRepository.getAll().forEach(function (pokemon) {
  let output = `${pokemon.name} (height: ${
    pokemon.height + ' feet) possess the following specialty(ies):'
  } ${pokemon.types.join(', ') + '.'}`;
  if (pokemon.height > 8) {
    output += ' - Wow, that’s big!';
  } //used placeholder text for types ${}
  document.write(output + '<br>', '<br>');
});
