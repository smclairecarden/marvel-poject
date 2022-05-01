import { useState, useEffect } from 'react'
import { getCharacterDetails } from '../../services/api-calls';
import { useLocation, Link } from 'react-router-dom';
import './CharacterDetails.css'

const CharacterDetails = (props) => {
  const [characterDetails, setCharacterDetails] = useState([])
  const [photo, setPhoto] = useState({})
  let location = useLocation()

  useEffect(() => {
    getCharacterDetails(location.state.character.id)
    .then(character => setCharacterDetails(character.data.results[0]))
  }, [])

  useEffect(() => {
    setPhoto(`${location.state.character.thumbnail.path}/portrait_incredible.jpg`)
  }, [])

  return (
    <>
      <div key={characterDetails.name}>
        <>
        <h1>{characterDetails.name}</h1>
        <img src={photo} alt="character" />
        {characterDetails.description ?
        <>
        <p><span className="description">Description</span>: {characterDetails.description}</p>
        </>
        :
        <p>No Description Available</p>
        } 
        <div>
        <p key={characterDetails.id}>See story events {characterDetails.name} has been a part of <Link to='/events' state={{characterDetails}}>here</Link></p>
        <p key={characterDetails.id}>See series {characterDetails
        .name} has been a part of: <Link to='/series' state={{characterDetails}}>here</Link></p>
        </div>
        <Link to="/characters" >
          <button>Back To Search</button>
        </Link>
        </>
      </div>
    </>
  )
}

export default CharacterDetails;