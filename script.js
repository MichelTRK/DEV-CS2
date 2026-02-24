
document.getElementById("btnSortearTimes")
  .addEventListener("click", sortearTimes);

document.getElementById("btnSortearMapa")
  .addEventListener("click", sortearMapa);


const mapas = [
  "Dust II",
  "Mirage",
  "Inferno",
  "Nuke",
  "Overpass",
  "Vertigo",
  "Ancient"
];


function sortearTimes() {
  let jogadores = document
    .getElementById("playersInput")
    .value
    .split("\n")
    .map(nome => nome.trim())
    .filter(nome => nome !== "");

  if (jogadores.length < 2) {
    alert("Adicione pelo menos 2 jogadores!");
    return;
  }

  
  for (let i = jogadores.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [jogadores[i], jogadores[j]] = [jogadores[j], jogadores[i]];
  }

  let meio = Math.ceil(jogadores.length / 2);
  let time1 = jogadores.slice(0, meio);
  let time2 = jogadores.slice(meio);

  
  let cap1 = Math.floor(Math.random() * time1.length);
  let cap2 = Math.floor(Math.random() * time2.length);

  document.getElementById("time1").innerHTML =
    time1.map((j, i) =>
      i === cap1
        ? `<li class="capitao">👑 ${j} (Capitão)</li>`
        : `<li>${j}</li>`
    ).join("");

  document.getElementById("time2").innerHTML =
    time2.map((j, i) =>
      i === cap2
        ? `<li class="capitao">👑 ${j} (Capitão)</li>`
        : `<li>${j}</li>`
    ).join("");
}


function sortearMapa() {
  let mapaSorteado = mapas[Math.floor(Math.random() * mapas.length)];
  document.getElementById("mapaResultado").textContent = `🗺️ Mapa: ${mapaSorteado}`;
}