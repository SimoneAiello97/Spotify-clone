const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";

const mainCol = document.querySelector("#rowPrincipal");
const heroSec = document.querySelector(".hero");
let fetchedAlbums = 0;

const fetchAlbum = async () => {
  try {
    const randomAlbumId = Math.floor(Math.random() * 1000001);
    const res = await fetch(ALBUM_URL + randomAlbumId);
    console.log("RES", res);
    if (res.ok) {
      const album = await res.json();
      if (album.id) {
        let card = `
        <div class="card mb-3 col-6 col-md-4">
          <a href="${album.id}">
            <div class="row">
              <div class="col-4">
                  <img src="${album.cover_medium}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">${album.title}</h5>
                  <p class="card-text">${album.artist.name}</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </a>
        </div>
        `;
        mainCol.innerHTML += card;
        console.log("RES", album);
        fetchedAlbums++;
      }
    } else {
      throw new Error("Errore nel recupero del prodotto!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getHeroCard = async () => {
  try {
    const randomAlbumId = Math.floor(Math.random() * 1000001);
    const res = await fetch(ALBUM_URL + randomAlbumId);
    console.log("RES", res);
    if (res.ok) {
      const album = await res.json();
      if (album.id) {
        let heroCard = `
        <div class="card">
          <a href="${album.id}">
            <div class="row">
              <div class="col">
                  <img src="${album.cover_medium}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col">
                <div class="card-body">
                  <h5 class="card-title">${album.title}</h5>
                  <p class="card-text">${album.artist.name}</p>
                  <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </a>
        </div>
        `;
        heroSec.innerHTML += heroCard;
        console.log("RES", album);
      }
    } else {
      throw new Error("Errore nel recupero del prodotto!");
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchRandomAlbums = async () => {
  while (fetchedAlbums < 6) {
    await fetchAlbum();
  }
};

fetchRandomAlbums();
getHeroCard();
