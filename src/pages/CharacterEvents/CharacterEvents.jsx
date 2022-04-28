import { useState, useEffect } from "react"
import { getEvents } from "../../services/api-calls"
import { useLocation } from "react-router-dom"

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
      <>
        {events.map(event =>
          <div key={events.id}>
            <h1>{event.title}</h1>
            <p>{event.description}</p>
          </div>
        )}
      </>
    </>
  )
}

export default CharacterEvents