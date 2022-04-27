import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getComics } from '../../services/api-calls';

const Comics = (props) => {
  const [comics, setComics] = useState([])

  useEffect(() => {
    getComics()
    .then(comicData => setComics(comicData.data.results))
  }, [])

  return (
    <>
      <div>
        <h1>Marvel Comics</h1>
        <>
        {comics?.map(comic => 
          <div key={comic.title}>
            <Link to="/comic-details" state={{comic}}>
              {comic.title}
            </Link>
          </div>
        )}
        </>
      </div>
    </>
  );
}
 
export default Comics;