import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getComics } from '../../services/api-calls';
import './Comics.css'

const Comics = (props) => {
  const [comics, setComics] = useState([])

  useEffect(() => {
    getComics()
    .then(comicData => setComics(comicData.data.results))
  }, [])

  return (
    <>
      
        <h1>Marvel Comics</h1>
        <div className='comic-display'>
        <>
        {comics?.map(comic => 
          <div className='comic-card' key={comic.title}>
            <Link style={{ textDecoration: 'none' }}  to="/comic-details" state={{comic}}>
              <h4>{comic.title}</h4>
            </Link>
          </div>
        )}
        </>
      </div>
    </>
  );
}
 
export default Comics;