// import API_TOKEN from '../Helpers/token'
const API_TOKEN = "1e014499f91ac272f5dca6e90d76a221"

export function getFilmsFromApiWithSearchedText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
}
 
export function getImageFromApi (name) {

  return 'https://image.tmdb.org/t/p/w300' + name

}