const search = document.getElementById("search");
const btn = document.getElementById("getPokemon");
const card = document.querySelector(".card");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  search.innerHTML = search.value;
  getPokemon();
});

function getPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${search.value}`)
    .then((response) => response.json())
    .then((response) => {
      displayCard(response.name.charAt(0).toUpperCase() + response.name.slice(1),
                  response.id);
    });
}

const displayCard = (name,id) =>{
  card.innerHTML = `
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" class="card-img-top" alt="${name}"/>
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
  </ul>
  `;
}
