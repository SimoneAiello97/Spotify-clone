const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";

const mainCol = document.querySelector(".cards-row");
const heroSec = document.querySelector(".hero");
let fetchedAlbums = 0;
let buonasera = document.createElement('div');
buonasera.className = "fs-4 my-2 bolder"
        buonasera.textContent = 'Buonasera'
        mainCol.prepend(buonasera)

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

const bigCard = async () => {
  try {
    const heroId = Math.floor(Math.random() * 1000001);
    const res = await fetch(ALBUM_URL + heroId);
    console.log("RES", res);
    if (res.ok) {
      const heroAlbum = await res.json();
      if (heroAlbum.id) {
        let heroCard = `
        <div class="card d-none d-md-block">
          <a href="${heroAlbum.id}">
            <div class="row">
              <img src="${heroAlbum.cover_medium}" class="img-fluid rounded-start" alt="...">
              <div class="card-body">
              <p>Album</p>
                <h5 class="card-title">${heroAlbum.title}</h5>
                <p class="card-text">${heroAlbum.artist.name}</p>
                <p class="card-text"><small class="text-body-secondary">Ascolta il nuovo singolo di ${heroAlbum.artist.name}</small></p>
                <button class="btn btn-success rounded-4 mx-2">Play</button>
                <button class="btn btn-outline-light rounded-4 mx-2">Salva</button>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg></span>
                </div>
            </div>
          </a>
        </div>
        `;
        heroSec.innerHTML = heroCard;
        console.log("RES", album);
      } else {
        window.location.reload();
      }
    } else {
      throw new Error("Errore nel recupero del prodotto!");
    }
  } catch (error) {
    console.log(error);
  }
};

const getHeroCard = async () => {
  await bigCard();
};

const fetchRandomAlbums = async () => {
  while (fetchedAlbums < 6) {
    await fetchAlbum();
  }
};

fetchRandomAlbums();
getHeroCard();
