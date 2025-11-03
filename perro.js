document.getElementById("BuscarRaza").addEventListener("click", async () => {
  const raza = document.getElementById("razaInput").value.toLowerCase().trim();

  if (!raza) {
    document.getElementById("resultado").innerHTML = "⚠️ Por favor, escribe una raza.";
    return;
  }

  try {
    const res = await fetch(`https://dog.ceo/api/breed/${raza}/images/random`);
    const data = await res.json();

    if (data.status === "success") {
      document.getElementById("resultado").innerHTML = `
        <h2>🐶 ¡Aquí está tu perro de raza ${raza}!</h2>
        <img src="${data.message}" alt="Perro de raza ${raza}" width="300">
      `;
    } else {
      document.getElementById("resultado").innerHTML = "⚠️ Raza no encontrada, prueba otra.";
    }
  } catch (error) {
    document.getElementById("resultado").innerHTML = "⚠️ Error al conectar con la API";
  }
});