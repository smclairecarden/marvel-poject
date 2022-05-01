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
        <p className="description">{characterDetails.description}</p>
        </>
        :
        <p className="description">No Description Available</p>
        } 
        <div>
        <p className ="events" key={characterDetails.id}><Link style={{ textDecoration: 'none' }} to='/events' state={{characterDetails}}> {characterDetails
        .name}'s Story Events</Link></p>
        <p className="series" key={characterDetails.id}><Link style={{ textDecoration: 'none' }} to='/series' state={{characterDetails}}>{characterDetails
          .name}'s Series</Link></p>
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