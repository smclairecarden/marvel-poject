import { useState, useEffect } from 'react'
import { getComicDetails } from '../../services/api-calls';
import { useLocation, Link } from 'react-router-dom';

const ComicDetails = (props) => {
  const [comicDetails, setComicDetails] = useState([])
  // const [photo, setPhoto] = useState({})
  let location = useLocation()

  useEffect(() => {
    getComicDetails(location.state.comic.id)
    .then(comic => setComicDetails(comic.data.results[0]))
  }, [])

  // useEffect(() => {
  //   setPhoto(`${location.state.character.thumbnail.path}/portrait_incredible.jpg`)
  // }, [])

  return (
    <>
      <div key={comicDetails.title}>
        <>
        <h1>{comicDetails.title}</h1>
        <p>{comicDetails.description}</p>
        <p>{comicDetails.issueNumber}</p>
        <Link to="/comics" >
          <button>Back To List</button>
        </Link>
        </>
      </div>
    </>
  )
}

export default ComicDetails;