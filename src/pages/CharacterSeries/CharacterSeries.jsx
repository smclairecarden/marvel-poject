import { useState, useEffect } from "react"
import { getSeries } from "../../services/api-calls"
import { useLocation, Link } from "react-router-dom"
// import '../CharacterEvents/CharacterEvents.css'

const CharacterSeries = (props) => {
  const [series, setSeries] = useState([])
  let location = useLocation()


  useEffect(() => {
    console.log(location.state.characterDetails.thumbnail.path)
    getSeries(location.state.characterDetails.id)
    .then(seriesData => setSeries(seriesData.data.results))
  }, [])


  return (
    <>
    
      <h1>Character Series</h1>
      
      <Link to="/characters">
          <button>Back To Search</button>
      </Link>
      <div class="event-page">
      <>
        {series.map(series =>
          <div class="event-card" key={series.id}>
            <h2>{series.title}</h2>
            <p>{series.description}</p>
          </div>
        )}
      </>
      </div>
    </>
  )
}

export default CharacterSeries