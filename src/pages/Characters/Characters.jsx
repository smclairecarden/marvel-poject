import { useState } from 'react'

const Characters = (props) => {
  const [characters, setCharacters] = useState([])
  return (
    <>
      <div>
        <h1>List of Marvel Characters</h1>
        {characters.map((characterName) => (
          <div key={characterName}>
            {characterName}
          </div>
        ))}
      </div>
    </>
  );
}
 
export default Characters;