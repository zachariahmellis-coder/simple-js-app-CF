let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

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
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    button.addEventListener('click', function () {
      pokemonRepository.loadDetails(pokemon).then(function () {
        showModal(pokemon);
      });
    });

    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }

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

  //Creates and shows modal
  function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';

    //Overlay to click outside to close
    let overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.addEventListener('click', hideModal);

    //Modal dialog box
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.tabIndex = -1;

    //Close button
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    //Pokemon name
    let titleElement = document.createElement('h1');
    titleElement.id = 'modal-title';
    titleElement.innerText = pokemon.name;

    //Pokemon image
    let imageElement = document.createElement('img');
    imageElement.className = 'modal-image';
    imageElement.src = pokemon.imageUrl;
    imageElement.alt = pokemon.name;

    //Pokemon height
    let heightElement = document.createElement('p');
    heightElement.innerHTML = pokemon.height + ' feet';

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);

    modalContainer.appendChild(overlay);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    //Closes modal when clicking outside modal content
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        hideModal();
      }
    });
  }
  //Closes modal
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  //Closes modal with button
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-class');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  //Closes modal on Escape key
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //Closes modal when clicking outside modal content
  document.querySelector('#modal-container').addEventListener('click', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.target === modalContainer) {
      hideModal();
    }
  });

  //Gets the modal container element and cleared the modal content
  function showDialog(title, text) {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.innerHTML = '';

    //Creates the modal box
    let modal = document.createElement('div');
    modal.classList.add('modal');

    //Creates and adds title to header
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;

    //Creates and adds main content in paragraphs
    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    //Creates 'confirm' button
    let confirmButton = document.createElement('button');
    confirmButton.classList.add('modal-confirm');
    confirmButton.innerText = 'Confirm';

    //Creates 'cancel' button
    let cancelButton = document.createElement('button');
    cancelButton.classList.add('modal-cancel');
    cancelButton.innerText = 'Cancel';

    //Adds all elements to the modal box
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(confirmButton);
    modal.appendChild(cancelButton);

    //Adds all the modal box to the container and makes it visible
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');

    //Automatically focuses the confirm button for accessibility
    confirmButton.focus();

    //Returns a Promise that resolves on click-confirm & rejects clicks-cancel
    return new Promise((resolve, reject) => {
      cancelButton.addEventListener('click', () => {
        hideModal();
        reject();
      });
      confirmButton.addEventListener('click', () => {
        hideModal();
        resolve();
      });
    });
  }

  //Event listener for dialog trigger button
  //Detects on'Show dialog' button-click in HTML
  //Opens the dialog & reacts based on the viewer’s choice
  if (document.querySelector('#show-dialog')) {
    document.querySelector('#show-dialog').addEventListener('click', () => {
      showDialog('Confirm action', 'Are you sure you want to do this?').then(
        function () {
          alert('confirmed!');
        },
        function () {
          alert('not confirmed');
        }
      );
    });
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

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    console.log(pokemon);
    pokemonRepository.addListItem(pokemon);
  });
});
