import React, { useEffect, useState } from 'react'
import { getCharacters } from '../../services/api-calls';
import { Link } from 'react-router-dom'

const Characters = (props) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
    .then(characterData => setCharacters(characterData.data.results))
  }, [])

  return (
    <>
      <div>
        <h1>List of Marvel Characters</h1>
        {characters.map((character) => (
          <div key={character.name}>
            <Link to="/details" state={{character}}>
              {character.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
 
export default Characters;