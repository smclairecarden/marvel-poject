import { useState } from "react";

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = (evt) => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleCharacterSearch(formData)
  }

  return (
    <>
      <div>
        <form class="form" onSubmit={handleSubmit}>
          <input 
          class="search"
          name="query" 
          type="text" 
          autoComplete="off"
          value={formData.query}
          onChange={handleChange}
          />
          <button class="submit-button" type="submit">Search</button>
        </form>
      </div>
    </>
  );
}
 
export default SearchForm;