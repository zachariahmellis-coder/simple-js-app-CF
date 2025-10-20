//option+shift+f to format
let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bouffalant', height: 5, types: ['Normal, Thinking'] },
    { name: 'Yveltal', height: 19, types: ['Dark, Flying'] },
    { name: 'Haunter', height: 5, types: ['Ghost, Poison'] },
    { name: 'Noctowl', height: 5, types: ['Normal, Flying'] },
    { name: 'Solosis', height: 1, types: ['Psychic, Coding'] },
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

console.log(
  pokemonRepository.getAll()
); /*loop code updated to cope with new changes*/
pokemonRepository.add({ name: 'Zacian', height: 9, types: ['Fairy'] });
console.log(pokemonRepository.getAll());
