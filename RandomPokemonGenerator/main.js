const getPokemon = document.getElementById("getPokemon");
const randompokemon = document.querySelector(".randompokemon");

getPokemon.addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/"+ Math.floor(Math.random() * (151 + 1)+1))
        .then((response) => response.json())
        .then((response) => {
            displayPokemon(response.name.charAt(0).toUpperCase() + response.name.slice(1),
                           response.id);
        });
});

const displayPokemon = (name,id) =>{
    randompokemon.innerHTML = `
    <div class="card card border-info mb-3" style="width: 20rem;">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" class="card-img-top" alt="${name}">
            <div class="card-body">
            <span>N.º${id}</span>
                <h5 class="card-title">${name}</h5>
            </div>
    </div>
    `;
}
