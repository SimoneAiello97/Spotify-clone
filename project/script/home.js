function convertiSecondi(secondi) {
  let ore = Math.floor(secondi / 3600);
  let minuti = Math.floor((secondi % 3600) / 60);
  let secondiRimanenti = secondi % 60;

  let risultato = "";
  if (ore > 0) {
    if (ore == 1) {
      risultato += ore + " ora ";
    } else {
      risultato += ore + " ore ";
    }
  }
  if (minuti > 0) {
    risultato += minuti + " min ";
  }
  if (secondiRimanenti > 0) {
    risultato += secondiRimanenti + " sec.";
  }

  return risultato;
}

function convertiSecondiPerBrano(secondi) {
  let minuti = Math.floor((secondi % 3600) / 60);
  let secondiRimanenti = secondi % 60;

  let risultato = "";
  if (minuti < 10) {
    risultato += '0' + minuti + ":";
  } else {
    risultato += minuti + ":";
  }
  if (secondiRimanenti < 10) {
    risultato += '0' + secondiRimanenti;
  } else {
    risultato += secondiRimanenti;
  }

  return risultato;
}

function createPageAlbum() {
  const URL = new URLSearchParams(window.location.search);
  const albumID = URL.get('albumID');

  let main = document.getElementById('rowPrincipal');

  main.innerHTML = `
  <div class="container-fluid text-white mb-4">
      <div class="row">
              <div class="col-3 pe-0 text-end my-auto" id="album-cover"></div>
              <div class="col align-self-end">
                  <h6 class="text-uppercase small">album</h6>
                  <h1 id="album-title" class="fw-bold"></h1>
                  <div class="d-flex" id="album-info"></div>
              </div>
          </div>
      </div>
      <div class="container-fluid bg-dark bg-opacity-75 text-light">
          <div class="row mx-5">
              <div class="col fs-3">
                  <i class="bi bi-play-circle-fill fs-1 ms-1 play-button"></i>
                  <i class="icon-row bi bi-heart mx-3"></i>
                  <i class="icon-row bi bi-arrow-down-circle me-3"></i>
                  <i class="icon-row bi bi-three-dots"></i>
          </div>
          </div>
          <div class="row">
              <div class="col track-list-header" id="track-list-header">
                  <div class="row border-bottom border-secondary pb-2 mx-5">
                      <div class="col-1 text-end">
                          <span class="pe-2 small">#</span>
                      </div>
                      <div class="col-5">
                          <p class="m-0 text-uppercase small">titolo</p>
                      </div>
                      <div class="col text-end">
                          <p class="m-0 text-uppercase small">riproduzioni</p>
                      </div>
                  <div class="col text-end small"><i class="bi bi-clock me-5"></i></div>
              </div>
          </div>
      </div>
  </div>
  `


  let albumCover = document.getElementById('album-cover');
  let albumTitle = document.getElementById('album-title');
  let albumInfo = document.getElementById('album-info');
  let trackListHeader = document.getElementById('track-list-header');

  fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + albumID)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella richiesta dell'album!");
      }
    })
    .then(albumData => {

      //recupero l'anno dell'album
      fullAlbumYear = new Date(albumData['release_date'])
      fullAlbumYear = fullAlbumYear.getFullYear();

      console.log(albumData);
      //inserisco la cover dell'album
      albumCover.innerHTML = `<img src="${albumData["cover_medium"]}" class="shadow-lg img-fluid me-3" />`;

      //inserisco il titolo
      albumTitle.innerText = albumData.title;
      albumTitle.style.fontSize = '3.5em';

      //inserisco le info dell'album
      albumInfo.innerHTML = `
  <a href="${albumData.contributors.link}">
      <img src="${albumData.artist['picture_small']}" class="rounded-circle" width="25" />
  </a>

  <a href="${albumData.contributors.link}" class="link-light link-underline-opacity-0">
      <span class="fw-bold ms-2">${albumData.artist.name}</span>
  </a>

  <span class="mx-2 fw-bold">&middot;</span>

  <span>${fullAlbumYear}</span>

  <span class="mx-2 fw-bold">&middot;</span>

  <span class="fw-bold">${albumData['nb_tracks']} brani,</span>

  <span>${convertiSecondi(albumData.duration)}</span>
  `

      // inserisco le tracce dell'album
      albumData.tracks.data.forEach((track, index) => {
        trackListHeader.innerHTML += `
      <!-- inizio tracks -->
      <div class="row my-2 mx-5 track">
          <div class="col-1 text-end my-auto">
              <span class="pe-2">${index += 1}</span>
          </div>
          <div class="col-5">
              <p class="m-0 text-light">${track.title}</p>
              <a href="" class="track-artist-name">
                  <p class="m-0">${track.artist.name}</p>
              </a>
          </div>
          <div class="col text-end my-auto">
              <p class="m-0">${track.rank.toLocaleString()}</p>
          </div>
          <div class="col text-end my-auto">
              <p class="m-0 me-5">${convertiSecondiPerBrano(track.duration)}</p>
          </div>
      </div>
      `
      });

      // fine del then
    })
    .catch(err => console.log(err));
}

const URL = new URLSearchParams(window.location.search);
const albumID = URL.get('albumID');

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
          <a href="index.html?albumID=${album.id}" onclick="createPageAlbum()">
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

let artistName = document.getElementById('songTitle');
let dinamicNameArtist = document.getElementById('dinamicNameArtist');
let dinamicSongTitle = document.getElementById('dinamicSongTitle');
let dinamicImg = document.getElementById('dinamicImg');
let audioPlayer = null; 
function stopAudio() {
  if (audioPlayer) {
    audioPlayer.pause();
  }
}
let playBtn = document.querySelector('.play-pause-btn')
  console.log(playBtn);
let playSong = function (prev, artist, song, img) {
  console.log(prev);
  audioPlayer = new Audio(`${prev}`)
  audioPlayer.play()
  artistName.innerText = song + ' | ' + artist;
  dinamicNameArtist.innerText = artist + ' ';
  dinamicSongTitle.innerText = song;
  dinamicImg.src = img;
  dinamicImg.classList.remove('d-none');
  
playBtn.addEventListener('click', stopAudio)
}


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
          <a href="index.html?albumID=${heroAlbum.id}" onclick="createPageAlbum()">
            <div class="row">
              <img src="${heroAlbum.cover_medium}" class="img-fluid rounded-start" alt="...">
              <div class="card-body">
              <p>Album</p>
                <h5 class="card-title">${heroAlbum.title}</h5>
                <p class="card-text">${heroAlbum.artist.name}</p>
                <p class="card-text"><small class="text-body-secondary">Ascolta il nuovo singolo di ${heroAlbum.artist.name}</small></p>
                
                </div>
                </div>
                </a>
              <button onclick="playSong('${heroAlbum.tracks.data[0].preview}', '${heroAlbum.artist.name}', '${heroAlbum.tracks.data[0].title}', '${heroAlbum.cover_small}')" class="btn btn-success rounded-4 mx-2 play-pause-btn">Play</button>
        <button class="btn btn-outline-light rounded-4 mx-2">Salva</button>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg></span>
              </div>
        `;
        heroSec.innerHTML = heroCard;
        // console.log("RES", album);
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


if (albumID) {
  createPageAlbum();
} else {
  fetchRandomAlbums();
  getHeroCard();
}
