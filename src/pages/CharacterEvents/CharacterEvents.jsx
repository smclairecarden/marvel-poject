import { useState, useEffect } from "react"
import { getEvents } from "../../services/api-calls"
import { Link } from "react-router-dom"

const CharacterEvents = (props) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents()
    .then(eventData => console.log(eventData))
  }, [])

  return (
    <>
      <h1>Character Events</h1>

          <div key={events.title}>
            <h1>{events.title}</h1>
            <p>{events.description}</p>
          </div>
    </>
  )
}

export default CharacterEvents