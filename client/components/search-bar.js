import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({query, changeHandler, submitHandler}) => {
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="search-bar">Search: </label>
      <input id="search-bar" value={query} onChange={changeHandler} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SearchBar

/**
 * PROP TYPES
 */
SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
}
