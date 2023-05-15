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

let customInputField = document.querySelector('.input-group .form-control')
let customSearchButton = document.querySelector(
  '#button-addon2')
  customSearchButton.addEventListener('click', () => {
    let ul = document.getElementById('ul')
                 ul.innerHTML = ''
    getSongs(customInputField.value);})