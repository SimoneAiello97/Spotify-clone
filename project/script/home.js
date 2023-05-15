const ALBUM_URL =
  "https://striveschool-api.herokuapp.com/api/deezer/album/{id}";

let main = document.querySelector("main");

const songs = function (ALBUM_URL) {
  fetch(ALBUM_URL)
    .then((res) => {
      console.log("RES", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel recupero del prodotto!");
      }
    })
    .then((data) => {
      data.forEach((id) => {
        card.innerHtml = `<div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${id.img}" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${id.name}</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary"
                      >Last updated 3 mins ago</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>`;
        main.appendChild(card);
      });
    });
};
