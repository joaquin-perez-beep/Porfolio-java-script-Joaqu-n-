document.getElementById("BuscarPokemon").addEventListener("click", async () => {
  const pokemon = document.getElementById("pokemonInput").value.toLowerCase().trim();

  if (!pokemon) {
    document.getElementById("resultado").innerHTML = "⚠️ Por favor, escribe un Pokémon.";
    return;
  }

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!res.ok) throw new Error("Pokémon no encontrado");

    const data = await res.json();

    document.getElementById("resultado").innerHTML = `
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p>Altura: ${data.height}</p>
      <p>Peso: ${data.weight}</p>
      <p>Tipo: ${data.types.map(t => t.type.name).join(", ")}</p>
    `;
  } catch (error) {
    document.getElementById("resultado").innerHTML = "⚠️ Pokémon no encontrado, prueba otro.";
  }
});