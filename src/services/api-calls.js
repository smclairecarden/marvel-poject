const baseURL = "https://gateway.marvel.com/v1/public/"

export function getCharacters() {
  return fetch(`${baseURL}characters?limit=100&offset=550&ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
  .then(res => res.json())
}

export function getCharacterDetails(Id) {
  return fetch(`${baseURL}characters/${Id}?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
  .then(res => res.json())
}