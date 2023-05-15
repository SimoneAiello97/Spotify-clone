window.onload = () => {

  fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/412')
  .then((res) => {
    console.log('oggetto response', res)
    
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
       let artistName = document.getElementById("artistName");
       let followers = document.getElementById("followers");
       let artistImg = document.getElementById("artistThumbnail");
       let monthlyListener = document.getElementById("monthlyListener");
       let artistImgLikes = document.getElementById("artistImgLikes");
       let artistImgLikes2 = document.getElementById("artistImgLikes2");
       let artistLikeName = document.getElementById("artistLikeName");
       artistName.textContent = artist.name;
       artistLikeName.textContent = artist.name;
       artistImgLikes.src = artist.picture;
       artistImgLikes2.src = artist.picture;
       followers.textContent = artist.nb_fan + " followers";
       monthlyListener.textContent = artist.nb_fan + " ascoltatori mensili";
       artistImg.style.backgroundImage = `url(${artist.picture_xl})`;     
  })
  .catch((error) => {
        console.log(error)
  })


  

} // fine funzione onload



// fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/412')
//   .then((res) => {
//     console.log('oggetto response', res)
    
// 	if (res.ok) {
//       return res.json()
//     } else {
//       throw new Error("Errore nell'esecuzione della richiesta")
//     }
//   })
//   .then((artist) => {
//        console.log("Atributi dell'Artista sono", artist)
//        console.log("id " , artist.id)
//        console.log("tracklist " , artista.tracklist)
//        let artistName = document.getElementById("artistName");
//        let followers = document.getElementById("followers");
//        let artistImg = document.getElementById("artistThumbnail");
//        let monthlyListener = document.getElementById("monthlyListener");
//        let artistImgLikes = document.getElementById("artistImgLikes");
//        let artistImgLikes2 = document.getElementById("artistImgLikes2");
//        let artistLikeName = document.getElementById("artistLikeName");
//        artistName.textContent = artist.name;
//        artistLikeName.textContent = artist.name;
//        artistImgLikes.src = artist.picture;
//        artistImgLikes2.src = artist.picture;
//        followers.textContent = artist.nb_fan + " followers";
//        monthlyListener.textContent = artist.nb_fan + " ascoltatori mensili";
//        artistImg.style.backgroundImage = `url(${artist.picture_xl})`;     
       
//   })
//   .catch((error) => {
//         console.log(error)
//   })

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

       
