let API = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='
const getSongs = function (query) {
    fetch(API + query)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Error getting the images')
            }
        })
        .then((songs) => {
            console.log(songs.data)
            let data = songs.data
            data.forEach(element => {
                let newLi = document.createElement('li')
                newLi.innerHTML = element.title + ' || ' + element.artist.name
                let ul = document.getElementById('ul')

                ul.appendChild(newLi)
            });
        })
        .catch((err) => {
            console.log(err)
        })
}
let searchBtn = document.getElementById('search-navbar')
let mainSearch = document.getElementById('rowPrincipal')

searchBtn.addEventListener('click', () => {
    let searchTemplate = `
        <div class="container-fluid">
        <h2>Cerca</h2>
        <div class="row">
            <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                <input type="text" class="form-control" placeholder="Cosa vuoi ascoltare?" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div>
            <div class="row ms-0" id="searchCards">
                <div class="col-6 col-md-4">
                    <div class="card p-2 my-2">
                        <h4>Podcast</h4>
                        <img src="assets/imgs/search/image-2.jpg"> 
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card2 p-2 my-2">
                        <h4>Create per te</h4>
                        <img src="assets/imgs/search/image-3.jpg">
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card3 p-2 my-2">
                        <h4>Nuove uscite</h4>
                        <img src="assets/imgs/search/image-4.jpg">
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card4 p-2 my-2">
                        <h4>Pop</h4>
                        <img src="assets/imgs/search/image-5.jpg">
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card5 p-2 my-2">
                        <h4>Hip Pop</h4>
                        <img src="assets/imgs/search/image-6.jpg">
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card6 p-2 my-2">
                        <h4>Dance/Elettronica</h4>
                        <img src="assets/imgs/search/image-7.jpg">
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card7 p-2 my-2">
                        <h4>Latina</h4>
                        <img src="assets/imgs/search/image-8.jpg">
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="card card8 p-2 my-2">
                        <h4>Classifiche</h4>
                        <img src="assets/imgs/search/image-9.jpg">
                    </div>
                </div>
            </div>
        </div>
        </div>
    `
    mainSearch.innerHTML = searchTemplate
})
    // let customInputField = document.querySelector('.input-group .form-control')
    // let customSearchButton = document.querySelector('#button-addon2')
    // customSearchButton.addEventListener('click', () => {
    //     let ul = document.getElementById('ul')
    //     ul.innerHTML = ''
    //     getSongs(customInputField.value);
    // })

