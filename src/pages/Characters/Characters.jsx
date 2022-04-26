import React, { useEffect, useState } from 'react'
import { getCharacters } from '../../services/api-calls';

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
            {character.name}
          </div>
        ))}
      </div>
    </>
  );
}
 
export default Characters;