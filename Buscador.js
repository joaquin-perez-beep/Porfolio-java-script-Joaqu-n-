document.getElementById("buscar").addEventListener("click", () => {
    const user = document.getElementById("usuario").value.trim();
    if (!user) return alert("Ingrese un usuario");

    document.getElementById("resultado").innerHTML = "🔎 Buscando...";

    fetch(`https://api.github.com/users/${user}`)
        .then(res => {
            if (!res.ok) throw new Error("Usuario no encontrado");
            return res.json();
        })
        .then(data => {
            document.getElementById("resultado").innerHTML = `
                <img src="${data.avatar_url}" alt="Avatar">
                <h2>${data.login}</h2>
                <p>👥 Seguidores: ${data.followers}</p>
                <p>📦 Repos públicos: ${data.public_repos}</p>
                <a href="${data.html_url}" target="_blank">Ver perfil</a>
            `;
        })
        .catch(error => {
            document.getElementById("resultado").innerHTML = `❌ ${error.message}`;
        })
        .finally(() => console.log("✅ Búsqueda finalizada"));
});

document.getElementById("buscar").addEventListener("click", () => {
  const user = document.getElementById("usuario").value.trim();
  const resultado = document.getElementById("resultado");

  if (!user) return alert("Por favor, ingresa un nombre de usuario");
  resultado.innerHTML = "🔎 Buscando...";

  fetch(`https://api.github.com/users/${user}`)
    .then(res => {
      if (!res.ok) throw new Error("Usuario no encontrado");
      return res.json();
    })
    .then(data => {
      resultado.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar">
        <h2>${data.login}</h2>
        <p>👥 Seguidores: ${data.followers}</p>
        <p>📦 Repos públicos: ${data.public_repos}</p>
        <p>ubicacion:${data.location ? data.location : 'No disponible'}</p>
        <p>estrellas:${data.following ? data.following : 'No disponible'}</p>
        <p>gmails:${data.email ? data.email : 'No disponible'}</p>
        <p>nombre completo:${data.name? data.name: 'No disponible'}<p>
        <h3>🗂 Últimos Repositorios:</h3>
        <ul id="repos"></ul>
      `;

      return fetch(`https://api.github.com/users/${user}/repos?sort=created&per_page=5`);
    })
    .then(res => res.json())
    .then(repos => {
      const lista = document.getElementById("repos");
      if (repos.length === 0) {
        lista.innerHTML = "<li>Este usuario no tiene repos públicos.</li>";
        return;
      }
      repos.forEach(repo => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        lista.appendChild(li);
      });
    })
    .catch(err => {
      resultado.innerHTML = `❌ ${err.message}`;
    });
});