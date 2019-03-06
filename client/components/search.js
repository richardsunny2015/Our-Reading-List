import React, {Component} from 'react'
import SearchBar from './search-bar'
import BookList from './book-list'
import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: []
    }
  }
  changeHandler = e => {
    this.setState({query: e.target.value})
  }
  submitHandler = async e => {
    e.preventDefault()
    const response = await axios.get(
      `/api/books?q=${encodeURIComponent(this.state.query)}`
    )
    const {data} = response
    console.log(data)
    this.setState({results: data})
  }

  render() {
    const {query, results} = this.state
    return (
      <section>
        <SearchBar
          query={query}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
        <BookList books={results} />
      </section>
    )
  }
}

export default Search
