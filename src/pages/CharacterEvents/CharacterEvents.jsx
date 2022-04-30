import { useState, useEffect } from "react"
import { getEvents } from "../../services/api-calls"
import { useLocation, Link } from "react-router-dom"
import './CharacterEvents.css'

const CharacterEvents = (props) => {
  const [events, setEvents] = useState([])
  let location = useLocation()

  useEffect(() => {
    console.log(location.state.characterDetails.id)
    getEvents(location.state.characterDetails.id)
    .then(eventData => setEvents(eventData.data.results))
  }, [])

  return (
    <>
    
      <h1>Character Events</h1>
      
      <Link to="/characters">
          <button>Back To Search</button>
      </Link>
      <div class="event-page">
      <>
        {events.map(event =>
          <div class="event-card" key={events.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        )}
      </>
      </div>
    </>
  )
}

export default CharacterEvents