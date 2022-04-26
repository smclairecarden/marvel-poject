import { useState, useEffect } from 'react'
import { getCharacterDetails } from '../../services/api-calls';
import { useLocation } from 'react-router-dom';

const CharacterDetails = (props) => {
  const [characterDetails, setCharacterDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    console.log(location.state.character)
    getCharacterDetails(location.state.character.id)
    .then(character => setCharacterDetails(character.data.results[0]))
  }, [])

  return (
    <>
      <div>
        <h1>Details</h1>
        {characterDetails ?
        <>
        <h2>{characterDetails.name}</h2>
        </>
        :
        <>
        
        </>  
      }
      </div>
    </>
  )
}

export default CharacterDetails;