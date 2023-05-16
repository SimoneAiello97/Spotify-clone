const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";

const mainCol = document.querySelector("#rowPrincipal");
let fetchedAlbums = 0;

const fetchAlbum = async () => {
  try {
    const randomAlbumId = Math.floor(Math.random() * 1000001);
    const res = await fetch(ALBUM_URL + randomAlbumId);
    console.log("RES", res);
    if (res.ok) {
      const album = await res.json();
      if (album.id) {
        // Check if the album has a valid ID
        let card = document.createElement("div");
        card.innerHTML = `
          <a href="${album.id}"><div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${album.cover_medium}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
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
        mainCol.appendChild(card);
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

const fetchRandomAlbums = async () => {
  while (fetchedAlbums < 10) {
    await fetchAlbum();
  }
};

fetchRandomAlbums();
