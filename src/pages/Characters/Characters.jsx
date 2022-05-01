import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm';
import { characterSearch } from '../../services/api-calls';
import './Characters.css'

const Characters = (props) => {
  const [characters, setCharacters] = useState([])

  const handleCharacterSearch = formData => {
    characterSearch(formData)
    .then(characterResults => {
      setCharacters(characterResults.data.results)
    })
  }

  return (
    <>
      <div>
        <h1>Marvel Characters</h1>
        < SearchForm handleCharacterSearch={handleCharacterSearch} />
        {characters.length ?
        <>
        {characters?.map(character => 
          <div key={character.name}>
            <Link style={{ textDecoration: 'none' }} to="/details" state={{character}}>
              <h3 className='charactername'>{character.name}</h3>
            </Link>
          </div>
        )}
        </>
        :
        <h3>Please search for a character!</h3>
        }
      </div>
    </>
  );
}
 
export default Characters;