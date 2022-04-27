const baseURL = "https://gateway.marvel.com/v1/public/"

export function characterSearch(formData) {
  return fetch(`${baseURL}characters?name=${formData.query}&limit=20&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
  .then(res => res.json())
}

export function getCharacterDetails(Id) {
  console.log('THIS IS THE ID', Id)
  return fetch(`${baseURL}characters/${Id}?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
  .then(res => res.json())
}

export function getEvents(Id) {
  console.log('THIS IS THE ID', Id)
  return fetch(`${baseURL}characters/${Id}/events?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
  .then(res => res.json())
}

export function getComics() {
  return fetch(`${baseURL}comics?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
  .then(res => res.json())
}