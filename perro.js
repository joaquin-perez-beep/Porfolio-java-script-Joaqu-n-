const apiKey="";
document.getElementById("buscar").addEventListener("click", async () => {
  const ciudad = document.getElementById("ciudad").value.trim();
  if (!ciudad) return alert("");

  try {
    const res = await fetch(
      `=${ciudad}=${apiKey}`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      document.getElementById("resultado").innerHTML = "";
      return;
    }

    document.getElementById("resultado").innerHTML = /*llama el texto el innerHTML*/` 
      <h2>${}, ${}</h2>
      <p> : ${}°C</p>
      <p> : ${} km/h</p>
      <p>: ${}</p>
    `;
  } catch (error) {
    document.getElementById("resultado").innerHTML = "⚠️ Error al conectar con la API";
  }
});
