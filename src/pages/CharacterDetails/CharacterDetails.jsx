import { useState, useEffect } from 'react'
import { getCharacterDetails } from '../../services/api-calls';
import { useLocation, Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  const [characterDetails, setCharacterDetails] = useState({})
  const [photo, setPhoto] = useState({})
  let location = useLocation()

  useEffect(() => {
    getCharacterDetails(location.state.character.id)
    .then(character => setCharacterDetails(character.data.results[0]))
  }, [])

  useEffect(() => {
    console.log(location.state.character.thumbnail.path)
    setPhoto(`${location.state.character.thumbnail.path}/portrait_incredible.jpg`)
  }, [])

  return (
    <>
      <div>
        <>
        <h1>{characterDetails.name}</h1>
        <img src={photo} alt="character" />
        <p>{characterDetails.description}</p>
        <Link to="/characters">
          <button>Back To List</button>
        </Link>
        </>
      </div>
    </>
  )
}

export default CharacterDetails;