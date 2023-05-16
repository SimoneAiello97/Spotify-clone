const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";

let numero = Math.floor(Math.random() * 1000001);
let numero1 = Math.floor(Math.random() * 1000001);
let numero2 = Math.floor(Math.random() * 1000001);
let numero3 = Math.floor(Math.random() * 1000001);
let numero4 = Math.floor(Math.random() * 1000001);
let numero5 = Math.floor(Math.random() * 1000001);
let numero6 = Math.floor(Math.random() * 1000001);
let numero7 = Math.floor(Math.random() * 1000001);
let numero8 = Math.floor(Math.random() * 1000001);
let numero9 = Math.floor(Math.random() * 1000001);
let numero10 = Math.floor(Math.random() * 1000001);

const randomSongsArray = [
  numero1,
  numero2,
  numero3,
  numero4,
  numero5,
  numero6,
  numero7,
  numero8,
  numero9,
  numero10,
];
console.log(randomSongsArray);
let mainCol = document.querySelector("#rowPrincipal");

randomSongsArray.forEach((element) => {
  fetch(ALBUM_URL + element)
    .then((res) => {
      console.log("RES", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero del prodotto!");
      }
    })
    .then((album) => {
      let card = document.createElement("div");
      console.log(album);
      card.innerHTML = `
      <a href="${album.id}"><div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${album.cover_medium}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${album.name}</h5>
            <p class="card-text">${album.title}</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      </a>
    </div>
      `;
      mainCol.appendChild(card);
      console.log("RES", data);
    })
    .catch((error) => {
      console.log(error);
    });
});

const randomSongs = function () {
  fetch(ALBUM_URL + randomNumbs)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((res) => {
      randomSongsArray.forEach((element) => {
        if (element == res.id) {
        } else {
          window.location.reload();
        }
      });
      songs();
    })
    .catch((err) => console.log(err));
};
