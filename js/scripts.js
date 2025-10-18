//option+shift+f to format
let pokemonList = [
  { name: 'Bouffalant', height: 5, types: ['Normal, Thinking'] },
  { name: 'Yveltal', height: 19, types: ['Dark, Flying'] },
  { name: 'Haunter', height: 5, types: ['Ghost, Poison'] },
  { name: 'Noctowl', height: 5, types: ['Normal, Flying'] },
  { name: 'Solosis', height: 1, types: ['Psychic, Coding'] },
  { name: 'Melmetal', height: 8, types: ['Steel, Sitting Around All Day'] },
];

pokemonList.forEach((element) =>
  console.log(
    element.name +
      ' is ' +
      element.height +
      ' feet tall and possesses the following specialties: ' +
      element.types
  )
);

/*for (let i = 0; i < pokemonList.length; i++) {
  /*for loop that iterates over each item in pokemonList*/
/*Part 1 - Below the pokemonList array in your “scripts.js” file, create a for loop that iterates over each item in pokemonList*/
/*let pokemon = pokemonList[i];
  let output = `${pokemon.name} (height: ${
    pokemon.height
  }) types: ${pokemon.types.join(', ')}`;
  if (pokemon.height > 8) {
    output +=
      ' - Wow, that’s big!'; /*Next, add code to highlight special Pokémon in your list.*/
/*} /*Use what you’ve learned about adding strings in JavaScript to write the Pokémon’s height next to its name, for example, “Bulbasaur (height: 7)”.*/
/* document.write(
    output + '<br>',
    '<br>'
  ); /*Use document.write() inside the loop’s code to write the Pokémon name on your website’s DOM.*/
/*}*/
