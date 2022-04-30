import { useState, useEffect } from 'react'
import { getComicDetails } from '../../services/api-calls';
import { useLocation, Link } from 'react-router-dom';
import './ComicDetails.css'

const ComicDetails = (props) => {
  const [comicDetails, setComicDetails] = useState([])
  const [photos, setPhotos] = useState({})
  let location = useLocation()

  useEffect(() => {
    console.log(location.state.comic.images)
    getComicDetails(location.state.comic.id)
    .then(comic => setComicDetails(comic.data.results[0]))
    
  }, [])

  useEffect(() => {
    setPhotos(`${location.state.comic.images[0]?.path}/portrait_incredible.jpg`)
  }, [])

  return (
    <>
      <div class="detail-page" key={comicDetails.title}>

        <>
        <div class="detail-card">
        <h1>{comicDetails.title}</h1>
        
        {photos ?
        <>
        <img src={photos} alt="" />
        </>
        :
        <p>No photo available</p>
        }
        {comicDetails.description ?
        <>
        <p>Description: {comicDetails.description}</p>
        </>
        :
        <p>No Description Available</p>
        } 
        {comicDetails.issueNumber ?
        <>
        <p>Issue Number: {comicDetails.issueNumber}</p>
        </>
        :
        <p>No Issue Number Available</p>
        
        }     
        <Link to="/comics" >
          <button>Back To List</button>
        </Link>
        </div>
        </>
      </div>
    </>
  )
}

export default ComicDetails;