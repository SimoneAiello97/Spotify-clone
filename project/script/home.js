const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let numero = Math.floor(Math.random() * 21);

let main = document.querySelector("main");

const songs = function () {
  fetch(ALBUM_URL + numero)
    .then((res) => {
      console.log("RES", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero del prodotto!");
      }
    })
    .then((data) => {
      console.log("RES", data);
    })
    .catch((error) => {
      console.log(error);
    });
};

songs();
