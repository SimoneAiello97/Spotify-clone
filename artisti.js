const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + selectedId;
const trackList = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + selectedId + "/top?limit=50";


window.onload = () => {

  fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/412')
  .then((res) => {
    console.log('oggetto response queen', res)
    
	if (res.ok) {
      return res.json()
    } else {
      throw new Error("Errore nell'esecuzione della richiesta")
    }
  })
  .then((artist) => {
       console.log("Atributi dell'Artista sono", artist)
       console.log("id " , artist.id)
       console.log("tracklist " , artist.tracklist)
       let artName = document.getElementById("artistName");
       let followers = document.getElementById("followers");
       let artImg = document.getElementById("artistThumbnail");
       let artImgLikes = document.getElementById("artistImgLikes");
       let artImgLikes2 = document.getElementById("artistImgLikes2");
       let artLikeName = document.getElementById("artistLikeName");
       artName.textContent = artist.name;
       artLikeName.textContent = artist.name;
       artImgLikes.src = artist.picture;
       artImgLikes2.src = artist.picture;
       followers.textContent = artist.nb_fan + " ascoltatori mensili";
      //  monthlyListener.textContent = artist.nb_fan + " ascoltatori mensili";
       artImg.style.backgroundImage = `url(${artist.picture_xl})`;     
  })
  .catch((error) => {
        console.log(error)
  })

  fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50")
      .then((res) => {
      console.log('oggetto response song queen', res)

      if (res.ok) {
        return res.json()
      } else {
        throw new Error("Errore nell'esecuzione della richiesta")
      }
      })// fine primo then
      .then( (tracklist) => {
      console.log("Atributi song queen sono", tracklist)

      let popularList = document.getElementById("popularList");
				popularList.innerHTML = "";

				tracklist.data.forEach((track) => {
          let liElement = document.createElement("li");
					liElement.classList.add("py-3");
					let duration = track.duration;
					let minutes = Math.floor(duration / 60);
					let seconds = Math.floor(duration % 60)
						.toString()
						.padStart(2, "0");
					let formattedDuration = `${minutes}:${seconds}`;
					liElement.innerHTML = `
						<div class="row row-cols-3 justify-content-center">
						<div class="col-6 fs-11 d-flex align-items-center">
							<img src="${track.album.cover_small}" alt="cover" width="35px" class="d-none d-md-inline"/>
							<button type="button" class="btn text-light text-start trackBtn align-self-center text-truncate">${track.title}</button>
						</div>
						<div class="col-3 d-flex align-items-center justify-content-center">
							<span class="d-none d-md-inline align-self-center">Rank ${track.rank}</span>
						</div>
						<div class="col-3 d-flex align-items-center justify-content-center">
							<span class="align-self-center">${formattedDuration}</span>
						</div>
					</div>
				  `
          ;
					
					popularList.appendChild(liElement);
        })

      })// fine del secondo then

      .catch((error) => {
        console.log(error)
       })//  fine catch
   



} // fine funzione onload



// tracklist = "https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=50"

// fetch(tracklist)
//   .then((res) => {
//     console.log('oggetto response', res)
    
// 	if (res.ok) {
//       return res.json()
//     } else {
//       throw new Error("Errore nell'esecuzione della richiesta")
//     }
//   })
//   .then((track) => {
//          console.log("Atributi di track ", track)
      
         
        //  data.forEach((event) => {
        //     let colTemplate = `
        //     <div class="col-12 col-md-3">
        //       <div class="card">
        //         <div class="card-body">
        //           <h5 class="card-title">${event.name}</h5>
        //           <p class="card-text">
        //             ${event.description}
        //           </p>
        //           <p>${new Date(event.time).toLocaleDateString('it-IT')} - ${
        //       event.price
        //     }€</p>
        //           <a href="./backoffice.html?eventId=${
        //             event._id
        //           }" class="btn btn-primary">MODIFICA</a>
        //         </div>
        //       </div>
        //     </div>
        //     `
        //     // sto passando all'indirizzo ./backoffice.html UN PARAMETRO
        //     // questo parametro è l'_id della risorsa che intenderò modificare!

        //     let rowReference = document.getElementById('events-container') // <div class="row"></div>
        //     rowReference.innerHTML += colTemplate //